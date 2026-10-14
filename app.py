"""
Flask Web Application for Multiple Linear Regression & Feature Selection Explorer
Supports:
1. 50 Startups Profit Prediction
2. Boston Housing Price (MEDV) Prediction
3. Custom Dataset Live Upload / URL Loader
"""

import os
import json
import itertools
import numpy as np
import pandas as pd
from flask import Flask, render_template, request, jsonify
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LassoCV, ElasticNetCV
from sklearn.feature_selection import SequentialFeatureSelector, RFE
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor

app = Flask(__name__, template_folder="templates", static_folder="static")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DATA_PATH = os.path.join(BASE_DIR, "model_data.json")

try:
    with open(MODEL_DATA_PATH, "r", encoding="utf-8") as f:
        REGISTRY = json.load(f)
except Exception as e:
    print(f"Warning: Could not load model_data.json: {e}")
    REGISTRY = {}


@app.route("/")
def index():
    """Render the main StatsUnlock-inspired regression explorer dashboard."""
    return render_template("index.html")


@app.route("/api/models", methods=["GET"])
def get_models():
    """Return model data. Can filter by problem ('50startups', 'boston') and algorithm."""
    problem = request.args.get("problem", "50startups")
    algo = request.args.get("algo")

    if problem not in REGISTRY:
        # Fallback to direct model mapping if legacy structure
        if algo and algo in REGISTRY:
            return jsonify({algo: REGISTRY[algo]})
        return jsonify(REGISTRY)

    prob_data = REGISTRY[problem]
    models = prob_data.get("models", {})
    if algo and algo in models:
        return jsonify({algo: models[algo]})

    return jsonify(prob_data)


@app.route("/api/predict", methods=["POST"])
def predict():
    """
    Live prediction endpoint: Calculates target prediction from active model
    and inputs with formula contribution breakdown.
    """
    try:
        data = request.get_json(force=True) or {}
        problem = data.get("problem", "50startups")
        algo = data.get("algo", "Lasso")
        k = int(data.get("k", 2))
        inputs = data.get("inputs", {})

        if problem not in REGISTRY:
            return jsonify({"error": f"Unknown problem '{problem}'"}), 400

        prob_spec = REGISTRY[problem]
        models = prob_spec["models"]

        if algo not in models or k < 1 or k > len(models[algo]):
            return jsonify({"error": "Invalid algorithm or k parameter"}), 400

        model_spec = models[algo][k - 1]
        coefficients = model_spec["coefficients"]
        active_features = model_spec["features"]

        predicted_val = 0.0
        breakdown = []

        for c in coefficients:
            feat_name = c["feature"]
            coef_val = c["coef"]

            if "Intercept" in feat_name or feat_name == "const":
                predicted_val += coef_val
                breakdown.append({
                    "feature": "Intercept",
                    "value": 1.0,
                    "coef": coef_val,
                    "contribution": coef_val
                })
            else:
                # Look up feature value in user inputs
                val = float(inputs.get(feat_name, 0.0))
                contrib = coef_val * val
                predicted_val += contrib
                breakdown.append({
                    "feature": feat_name,
                    "value": val,
                    "coef": coef_val,
                    "contribution": contrib
                })

        return jsonify({
            "status": "success",
            "problem": problem,
            "algorithm": algo,
            "k": k,
            "active_features": active_features,
            "predicted_value": predicted_val,
            "rmse": model_spec["rmse"],
            "r2": model_spec["r2"],
            "breakdown": breakdown
        })

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/api/custom_dataset", methods=["POST"])
def process_custom_dataset():
    """
    Process custom dataset from URL or CSV payload.
    Auto-computes OLS and 5 feature selection algorithms.
    """
    try:
        req_data = request.get_json(force=True) or {}
        csv_url = req_data.get("url")
        csv_text = req_data.get("csv_text")
        target_col = req_data.get("target")

        if csv_url:
            df = pd.read_csv(csv_url)
        elif csv_text:
            from io import StringIO
            df = pd.read_csv(StringIO(csv_text))
        else:
            return jsonify({"error": "No CSV URL or CSV content provided"}), 400

        # Auto select numeric columns
        numeric_df = df.select_dtypes(include=[np.number]).dropna()
        if numeric_df.empty:
            return jsonify({"error": "No valid numeric columns found in dataset"}), 400

        if not target_col or target_col not in numeric_df.columns:
            target_col = numeric_df.columns[-1]  # Default to last numeric column

        feature_cols = [c for c in numeric_df.columns if c != target_col]
        if not feature_cols:
            return jsonify({"error": "Need at least 1 feature column"}), 400

        X = numeric_df[feature_cols].astype(float)
        y = numeric_df[target_col].astype(float)

        max_k = min(5, len(feature_cols))
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.20, random_state=42
        )

        scaler = StandardScaler()
        X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns=feature_cols)

        # Quick Lasso
        lasso = LassoCV(cv=min(5, len(X_train)), random_state=42, max_iter=5000).fit(X_train_scaled, y_train)
        lasso_rank = [f for _, f in sorted(zip(abs(lasso.coef_), feature_cols), reverse=True)]

        # Forward SFS
        sfs_subsets = []
        for k in range(1, max_k + 1):
            if k == len(feature_cols):
                sfs_subsets.append(feature_cols)
            else:
                sfs = SequentialFeatureSelector(LinearRegression(), n_features_to_select=k, direction="forward")
                sfs.fit(X_train, y_train)
                sfs_subsets.append(list(X_train.columns[sfs.get_support()]))

        # RFE
        rfe_subsets = []
        for k in range(1, max_k + 1):
            if k == len(feature_cols):
                rfe_subsets.append(feature_cols)
            else:
                rfe = RFE(LinearRegression(), n_features_to_select=k)
                rfe.fit(X_train_scaled, y_train)
                rfe_subsets.append(list(X_train.columns[rfe.get_support()]))

        # ElasticNet
        enet = ElasticNetCV(cv=min(5, len(X_train)), random_state=42, max_iter=5000).fit(X_train_scaled, y_train)
        enet_rank = [f for _, f in sorted(zip(abs(enet.coef_), feature_cols), reverse=True)]

        # Exhaustive
        exhaustive_subsets = []
        for k in range(1, max_k + 1):
            best_rmse = float("inf")
            best_sub = None
            for sub in itertools.combinations(feature_cols, k):
                lr = LinearRegression().fit(X_train[list(sub)], y_train)
                r = np.sqrt(mean_squared_error(y_test, lr.predict(X_test[list(sub)])))
                if r < best_rmse:
                    best_rmse = r
                    best_sub = list(sub)
            exhaustive_subsets.append(best_sub)

        algos = {
            "Lasso": [lasso_rank[:k] for k in range(1, max_k + 1)],
            "Forward SFS": sfs_subsets,
            "RFE": rfe_subsets,
            "ElasticNet": [enet_rank[:k] for k in range(1, max_k + 1)],
            "Exhaustive": exhaustive_subsets
        }

        # Helper to compute specs
        def compute_spec(sub):
            p = len(sub)
            n_test = len(y_test)
            lr = LinearRegression().fit(X_train[sub], y_train)
            y_pred = lr.predict(X_test[sub])
            rmse = float(np.sqrt(mean_squared_error(y_test, y_pred)))
            mae = float(mean_absolute_error(y_test, y_pred))
            r2 = float(r2_score(y_test, y_pred))
            adj_r2 = float(1 - (1 - r2) * (n_test - 1) / (n_test - p - 1)) if n_test > p + 1 else None

            X_tr_sm = sm.add_constant(X_train[sub], has_constant="add")
            sm_m = sm.OLS(y_train, X_tr_sm).fit()

            coefs = [{
                "feature": "Intercept (β₀)",
                "coef": float(sm_m.params.get("const", 0.0)),
                "stderr": float(sm_m.bse.get("const", 0.0)),
                "tstat": float(sm_m.tvalues.get("const", 0.0)),
                "pvalue": float(sm_m.pvalues.get("const", 0.0)),
                "ci_lower": float(sm_m.conf_int().loc["const", 0]),
                "ci_upper": float(sm_m.conf_int().loc["const", 1]),
                "vif": None
            }]
            for col in sub:
                v = None
                if p > 1:
                    try:
                        v = float(variance_inflation_factor(X_tr_sm.values, list(X_tr_sm.columns).index(col)))
                    except Exception:
                        pass
                elif p == 1:
                    v = 1.0

                coefs.append({
                    "feature": col,
                    "coef": float(sm_m.params.get(col, 0.0)),
                    "stderr": float(sm_m.bse.get(col, 0.0)),
                    "tstat": float(sm_m.tvalues.get(col, 0.0)),
                    "pvalue": float(sm_m.pvalues.get(col, 0.0)),
                    "ci_lower": float(sm_m.conf_int().loc[col, 0]),
                    "ci_upper": float(sm_m.conf_int().loc[col, 1]),
                    "vif": v
                })

            res = y_test.values - y_pred
            outliers = []
            for rank, sort_i in enumerate(np.argsort(-np.abs(res))[:10], 1):
                act = float(y_test.values[sort_i])
                pred = float(y_pred[sort_i])
                r_val = float(res[sort_i])
                outliers.append({
                    "rank": rank,
                    "index": int(y_test.index[sort_i]),
                    "actual": act,
                    "predicted": pred,
                    "residual": r_val,
                    "abs_error": abs(r_val),
                    "pct_error": (abs(r_val) / act * 100) if act != 0 else 0
                })

            return {
                "k": p,
                "features": sub,
                "rmse": rmse,
                "mae": mae,
                "r2": r2,
                "adj_r2": adj_r2,
                "f_stat": float(sm_m.fvalue) if not np.isnan(sm_m.fvalue) else None,
                "f_pvalue": float(sm_m.f_pvalue) if not np.isnan(sm_m.f_pvalue) else None,
                "coefficients": coefs,
                "outliers": outliers
            }

        custom_models = {}
        for algo_name, subs in algos.items():
            custom_models[algo_name] = [compute_spec(s) for s in subs]

        # Features info for dynamic sliders
        features_info = {}
        for c in feature_cols:
            c_min = float(numeric_df[c].min())
            c_max = float(numeric_df[c].max())
            c_mean = float(numeric_df[c].mean())
            c_step = (c_max - c_min) / 100 if c_max > c_min else 1.0
            features_info[c] = {
                "name": c,
                "min": round(c_min, 2),
                "max": round(c_max, 2),
                "default": round(c_mean, 2),
                "step": round(c_step, 4),
                "unit": ""
            }

        result_payload = {
            "id": "custom",
            "title": f"Custom Dataset ({target_col})",
            "target": target_col,
            "targetUnit": "",
            "targetName": target_col,
            "defaultK": min(2, max_k),
            "sweetSpotK": min(2, max_k),
            "overfittingK": max_k,
            "description": f"Custom regression modeling for {len(numeric_df)} rows and {len(feature_cols)} predictor features.",
            "datasetUrl": csv_url or "Custom Upload",
            "featuresInfo": features_info,
            "models": custom_models
        }

        return jsonify({"status": "success", "data": result_payload})

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/api/summary", methods=["GET"])
def summary():
    """Return summary comparison metrics across all problems and algorithms."""
    summary_list = []
    for prob_key, prob_val in REGISTRY.items():
        models = prob_val.get("models", {})
        for algo, subsets in models.items():
            for item in subsets:
                summary_list.append({
                    "problem": prob_key,
                    "algorithm": algo,
                    "k": item["k"],
                    "features": item["features"],
                    "rmse": item["rmse"],
                    "r2": item["r2"],
                    "mae": item["mae"]
                })
    return jsonify(summary_list)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
