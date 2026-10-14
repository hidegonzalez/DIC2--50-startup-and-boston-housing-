import itertools
import json
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LassoCV, ElasticNetCV
from sklearn.feature_selection import SequentialFeatureSelector, RFE
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor


def compute_model_spec(X_train, X_test, y_train, y_test, features_subset):
    sub = list(features_subset)
    p = len(sub)
    n_train = len(y_train)
    n_test = len(y_test)

    # 1. Prediction on test set via sklearn
    lr = LinearRegression()
    lr.fit(X_train[sub], y_train)
    y_pred = lr.predict(X_test[sub])

    rmse = float(np.sqrt(mean_squared_error(y_test, y_pred)))
    mae = float(mean_absolute_error(y_test, y_pred))
    r2 = float(r2_score(y_test, y_pred))
    adj_r2 = float(1 - (1 - r2) * (n_test - 1) / (n_test - p - 1)) if n_test > p + 1 else None

    # 2. Statsmodels for inferential statistics on training set (or full train)
    X_train_sm = sm.add_constant(X_train[sub], has_constant="add")
    sm_model = sm.OLS(y_train, X_train_sm).fit()

    f_stat = float(sm_model.fvalue) if not np.isnan(sm_model.fvalue) else None
    f_pvalue = float(sm_model.f_pvalue) if not np.isnan(sm_model.f_pvalue) else None

    conf_int = sm_model.conf_int()

    # VIF
    vifs = {}
    if p > 1:
        for idx, col in enumerate(X_train[sub].columns):
            try:
                # Add constant for VIF calculation
                X_vif = sm.add_constant(X_train[sub], has_constant="add")
                v = variance_inflation_factor(X_vif.values, idx + 1)
                vifs[col] = float(v)
            except Exception:
                vifs[col] = None
    elif p == 1:
        vifs[sub[0]] = 1.0

    coefficients = []
    # Intercept first
    coefficients.append({
        "feature": "Intercept (β₀)",
        "coef": float(sm_model.params.get("const", 0.0)),
        "stderr": float(sm_model.bse.get("const", 0.0)),
        "tstat": float(sm_model.tvalues.get("const", 0.0)),
        "pvalue": float(sm_model.pvalues.get("const", 0.0)),
        "ci_lower": float(conf_int.loc["const", 0]),
        "ci_upper": float(conf_int.loc["const", 1]),
        "vif": None
    })

    for feat in sub:
        coefficients.append({
            "feature": feat,
            "coef": float(sm_model.params.get(feat, 0.0)),
            "stderr": float(sm_model.bse.get(feat, 0.0)),
            "tstat": float(sm_model.tvalues.get(feat, 0.0)),
            "pvalue": float(sm_model.pvalues.get(feat, 0.0)),
            "ci_lower": float(conf_int.loc[feat, 0]),
            "ci_upper": float(conf_int.loc[feat, 1]),
            "vif": vifs.get(feat, None)
        })

    # Outliers on test set
    residuals = y_test.values - y_pred
    abs_errors = np.abs(residuals)
    test_indices = y_test.index.tolist()

    outlier_records = []
    for rank, sort_idx in enumerate(np.argsort(-abs_errors), start=1):
        actual_val = float(y_test.values[sort_idx])
        pred_val = float(y_pred[sort_idx])
        res_val = float(residuals[sort_idx])
        abs_err = float(abs_errors[sort_idx])
        pct_err = float((abs_err / actual_val) * 100) if actual_val != 0 else 0.0

        outlier_records.append({
            "rank": rank,
            "index": int(test_indices[sort_idx]),
            "actual": actual_val,
            "predicted": pred_val,
            "residual": res_val,
            "abs_error": abs_err,
            "pct_error": pct_err
        })

    return {
        "k": p,
        "features": sub,
        "rmse": rmse,
        "mae": mae,
        "r2": r2,
        "adj_r2": adj_r2,
        "f_stat": f_stat,
        "f_pvalue": f_pvalue,
        "coefficients": coefficients,
        "outliers": outlier_records[:10]
    }


def generate_50startups():
    print("Generating 50 Startups model registry...")
    df = pd.read_csv("50_Startups.csv")
    df_enc = pd.get_dummies(df, columns=["State"], dtype=int)
    features = [
        "R&D Spend",
        "Administration",
        "Marketing Spend",
        "State_Florida",
        "State_New York"
    ]
    X = df_enc[features].astype(float)
    y = df_enc["Profit"].astype(float)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=0
    )

    scaler = StandardScaler()
    X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns=features)

    # 1. Lasso
    lasso_cv = LassoCV(cv=5, random_state=0, max_iter=100000).fit(X_train_scaled, y_train)
    lasso_rank = [f for _, f in sorted(zip(abs(lasso_cv.coef_), features), reverse=True)]

    # 2. Forward SFS
    sfs_subsets = []
    for k in range(1, 6):
        if k == 5:
            sfs_subsets.append(features)
        else:
            sfs = SequentialFeatureSelector(LinearRegression(), n_features_to_select=k, direction="forward")
            sfs.fit(X_train, y_train)
            sfs_subsets.append(list(X_train.columns[sfs.get_support()]))

    # 3. RFE
    rfe_subsets = []
    for k in range(1, 6):
        if k == 5:
            rfe_subsets.append(features)
        else:
            rfe = RFE(LinearRegression(), n_features_to_select=k)
            rfe.fit(X_train_scaled, y_train)
            rfe_subsets.append(list(X_train.columns[rfe.get_support()]))

    # 4. ElasticNet
    enet_cv = ElasticNetCV(cv=5, random_state=0, max_iter=100000).fit(X_train_scaled, y_train)
    enet_rank = [f for _, f in sorted(zip(abs(enet_cv.coef_), features), reverse=True)]

    # 5. Exhaustive
    exhaustive_subsets = []
    for k in range(1, 6):
        best_rmse = float("inf")
        best_sub = None
        for sub in itertools.combinations(features, k):
            lr = LinearRegression().fit(X_train[list(sub)], y_train)
            r = np.sqrt(mean_squared_error(y_test, lr.predict(X_test[list(sub)])))
            if r < best_rmse:
                best_rmse = r
                best_sub = list(sub)
        exhaustive_subsets.append(best_sub)

    algos = {
        "Lasso": [lasso_rank[:k] for k in range(1, 6)],
        "Forward SFS": sfs_subsets,
        "RFE": rfe_subsets,
        "ElasticNet": [enet_rank[:k] for k in range(1, 6)],
        "Exhaustive": exhaustive_subsets
    }

    result = {}
    for algo_name, subset_list in algos.items():
        result[algo_name] = [
            compute_model_spec(X_train, X_test, y_train, y_test, sub)
            for sub in subset_list
        ]
    return result


def generate_boston():
    print("Generating Boston Housing model registry...")
    df = pd.read_csv("BostonHousing.csv")
    df.columns = [c.upper() for c in df.columns]
    target = "MEDV"
    features = [c for c in df.columns if c != target]

    X = df[features].astype(float)
    y = df[target].astype(float)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=42
    )

    scaler = StandardScaler()
    X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns=features)

    # 1. Lasso
    lasso_cv = LassoCV(cv=5, random_state=42, max_iter=10000).fit(X_train_scaled, y_train)
    lasso_rank = [f for _, f in sorted(zip(abs(lasso_cv.coef_), features), reverse=True)]

    # 2. Forward SFS
    sfs_subsets = []
    for k in range(1, 6):
        sfs = SequentialFeatureSelector(LinearRegression(), n_features_to_select=k, direction="forward")
        sfs.fit(X_train, y_train)
        sfs_subsets.append(list(X_train.columns[sfs.get_support()]))

    # 3. RFE
    rfe_subsets = []
    for k in range(1, 6):
        rfe = RFE(LinearRegression(), n_features_to_select=k)
        rfe.fit(X_train_scaled, y_train)
        rfe_subsets.append(list(X_train.columns[rfe.get_support()]))

    # 4. ElasticNet
    enet_cv = ElasticNetCV(cv=5, random_state=42, max_iter=10000).fit(X_train_scaled, y_train)
    enet_rank = [f for _, f in sorted(zip(abs(enet_cv.coef_), features), reverse=True)]

    # 5. Exhaustive for k=1..5
    exhaustive_subsets = []
    for k in range(1, 6):
        best_rmse = float("inf")
        best_sub = None
        for sub in itertools.combinations(features, k):
            lr = LinearRegression().fit(X_train[list(sub)], y_train)
            r = np.sqrt(mean_squared_error(y_test, lr.predict(X_test[list(sub)])))
            if r < best_rmse:
                best_rmse = r
                best_sub = list(sub)
        exhaustive_subsets.append(best_sub)

    algos = {
        "Lasso": [lasso_rank[:k] for k in range(1, 6)],
        "Forward SFS": sfs_subsets,
        "RFE": rfe_subsets,
        "ElasticNet": [enet_rank[:k] for k in range(1, 6)],
        "Exhaustive": exhaustive_subsets
    }

    result = {}
    for algo_name, subset_list in algos.items():
        result[algo_name] = [
            compute_model_spec(X_train, X_test, y_train, y_test, sub)
            for sub in subset_list
        ]
    return result


if __name__ == "__main__":
    startups_models = generate_50startups()
    boston_models = generate_boston()

    registry = {
        "50startups": {
            "id": "50startups",
            "title": "50 Startups Profit Prediction",
            "target": "Profit",
            "targetUnit": "$",
            "targetName": "Startup Profit",
            "defaultK": 2,
            "sweetSpotK": 2,
            "overfittingK": 5,
            "description": "Evaluate 50 startup ventures across R&D, Administration, and Marketing expenditures to discover optimal parsimonious profit predictors.",
            "datasetUrl": "https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv",
            "featuresInfo": {
                "R&D Spend": {"name": "R&D Spend", "min": 0, "max": 250000, "default": 100000, "step": 5000, "unit": "$"},
                "Marketing Spend": {"name": "Marketing Spend", "min": 0, "max": 500000, "default": 150000, "step": 5000, "unit": "$"},
                "Administration": {"name": "Administration", "min": 0, "max": 250000, "default": 120000, "step": 5000, "unit": "$"},
                "State": {"name": "State Location", "type": "select", "options": ["California", "New York", "Florida"], "default": "California"}
            },
            "models": startups_models
        },
        "boston": {
            "id": "boston",
            "title": "Boston Housing Price Prediction",
            "target": "MEDV",
            "targetUnit": "$1,000s",
            "targetName": "Median Home Value",
            "defaultK": 2,
            "sweetSpotK": 2,
            "overfittingK": 5,
            "description": "Predict Boston suburban median house values ($1,000s) from socio-economic, environmental, and structural features.",
            "datasetUrl": "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv",
            "featuresInfo": {
                "LSTAT": {"name": "% Lower Status of Population", "min": 1, "max": 40, "default": 12.5, "step": 0.5, "unit": "%"},
                "RM": {"name": "Avg Rooms per Dwelling", "min": 3, "max": 9, "default": 6.2, "step": 0.1, "unit": "rooms"},
                "PTRATIO": {"name": "Pupil-Teacher Ratio", "min": 12, "max": 23, "default": 18.5, "step": 0.5, "unit": ":1"},
                "DIS": {"name": "Distance to Employment Centers", "min": 1, "max": 13, "default": 3.8, "step": 0.2, "unit": "miles"},
                "NOX": {"name": "Nitric Oxides Concentration", "min": 0.35, "max": 0.9, "default": 0.55, "step": 0.01, "unit": "ppm"}
            },
            "models": boston_models
        }
    }

    # Save to model_data.json
    with open("model_data.json", "w", encoding="utf-8") as f:
        json.dump(registry, f, indent=2)

    # Save to model_data.js
    # Also support window.MODEL_DATA = registry["50startups"]["models"] for seamless compatibility!
    js_content = f"""// Auto-generated Multi-Problem Model Registry
window.MODEL_DATA_REGISTRY = {json.dumps(registry, indent=2)};

// Default backward compatibility for 50 Startups
window.MODEL_DATA = window.MODEL_DATA_REGISTRY["50startups"]["models"];
"""
    with open("model_data.js", "w", encoding="utf-8") as f:
        f.write(js_content)

    print("Successfully generated model_data.json and model_data.js with both datasets!")
