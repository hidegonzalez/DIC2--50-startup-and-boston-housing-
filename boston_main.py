"""
BOSTON HOUSING - CRISP-DM MULTIPLE LINEAR REGRESSION & FEATURE SELECTION
Course: IoT Applications & Data Analysis (AIoT)
Methodology: CRISP-DM (Cross-Industry Standard Process for Data Mining)

Features Evaluated:
CRIM, ZN, INDUS, CHAS, NOX, RM, AGE, DIS, RAD, TAX, PTRATIO, B, LSTAT

Target: MEDV (Median value of owner-occupied homes in $1000s)

Feature Selection Algorithms Benchmarked:
1. Lasso (L1 Regularization Ranking)
2. Sequential Forward Selection (Forward SFS)
3. Recursive Feature Elimination (RFE)
4. ElasticNet (L1 + L2 Regularization Ranking)
5. Exhaustive Best Subset Selection
"""

import itertools
import os
import sys
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LassoCV, ElasticNetCV
from sklearn.feature_selection import SequentialFeatureSelector, RFE
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import statsmodels.api as sm
from statsmodels.stats.outliers_influence import variance_inflation_factor

RANDOM_STATE = 42

print("=" * 70)
print("PHASE 1: BUSINESS UNDERSTANDING (BOSTON HOUSING)")
print("=" * 70)
print("Goal: Predict suburban Boston median housing prices (MEDV) using socio-economic")
print("and environmental characteristics.")
print("Objective: Compare 5 feature selection algorithms against baseline OLS regression.")
print("Key Principle: Parsimony (Occam's razor) - finding the optimal feature sweet spot")
print("that maximizes generalizability while penalizing excessive complexity.")

print("\n" + "=" * 70)
print("PHASE 2: DATA UNDERSTANDING")
print("=" * 70)
data_file = "BostonHousing.csv"
if os.path.exists(data_file):
    df = pd.read_csv(data_file)
else:
    url = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
    df = pd.read_csv(url)

df.columns = [c.upper() for c in df.columns]
target = "MEDV"
features = [c for c in df.columns if c != target]

print(f"Dataset Shape: {df.shape[0]} rows, {df.shape[1]} columns")
print(f"Features ({len(features)}): {features}")
print("\nFirst 5 rows:")
print(df.head())
print("\nMissing values:\n", df.isna().sum())

print("\n" + "=" * 70)
print("PHASE 3: DATA PREPARATION")
print("=" * 70)
X = df[features].astype(float)
y = df[target].astype(float)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=RANDOM_STATE
)

scaler = StandardScaler()
X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns=features)
X_test_scaled = pd.DataFrame(scaler.transform(X_test), columns=features)

print(f"Training samples: {len(X_train)} | Test samples: {len(X_test)}")

print("\n" + "=" * 70)
print("PHASE 4: MODELING & FEATURE SELECTION (k=1..5)")
print("=" * 70)

def evaluate_subset(features_subset):
    sub = list(features_subset)
    model = LinearRegression()
    model.fit(X_train[sub], y_train)
    y_pred = model.predict(X_test[sub])
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    return rmse, r2, mae

algorithms = {}

# 1. Lasso L1 Ranking
lasso_cv = LassoCV(cv=5, random_state=RANDOM_STATE, max_iter=10000).fit(X_train_scaled, y_train)
lasso_rank = [f for _, f in sorted(zip(abs(lasso_cv.coef_), features), reverse=True)]
algorithms["Lasso (L1 Ranking)"] = [lasso_rank[:k] for k in range(1, 6)]

# 2. Forward SFS
sfs_subsets = []
for k in range(1, 6):
    sfs = SequentialFeatureSelector(LinearRegression(), n_features_to_select=k, direction="forward")
    sfs.fit(X_train, y_train)
    sfs_subsets.append(list(X_train.columns[sfs.get_support()]))
algorithms["Forward SFS"] = sfs_subsets

# 3. RFE
rfe_subsets = []
for k in range(1, 6):
    rfe = RFE(LinearRegression(), n_features_to_select=k)
    rfe.fit(X_train_scaled, y_train)
    rfe_subsets.append(list(X_train.columns[rfe.get_support()]))
algorithms["RFE"] = rfe_subsets

# 4. ElasticNet Ranking
enet_cv = ElasticNetCV(cv=5, random_state=RANDOM_STATE, max_iter=10000).fit(X_train_scaled, y_train)
enet_rank = [f for _, f in sorted(zip(abs(enet_cv.coef_), features), reverse=True)]
algorithms["ElasticNet Ranking"] = [enet_rank[:k] for k in range(1, 6)]

# 5. Exhaustive Search
exhaustive_subsets = []
for k in range(1, 6):
    best_rmse = float("inf")
    best_sub = None
    for sub in itertools.combinations(features, k):
        rmse, _, _ = evaluate_subset(sub)
        if rmse < best_rmse:
            best_rmse = rmse
            best_sub = list(sub)
    exhaustive_subsets.append(best_sub)
algorithms["Exhaustive Search"] = exhaustive_subsets

comparison_records = []
for name, subsets in algorithms.items():
    print(f"\n--- {name} ---")
    for k, sub in enumerate(subsets, 1):
        rmse, r2, mae = evaluate_subset(sub)
        print(f"k={k}: RMSE={rmse:.3f}, R2={r2:.4f}, MAE={mae:.3f} | Features: {sub}")
        comparison_records.append({
            "Algorithm": name,
            "k": k,
            "Selected Features": ", ".join(sub),
            "RMSE": rmse,
            "R2": r2,
            "MAE": mae
        })

df_comp = pd.DataFrame(comparison_records)
df_comp.to_csv("boston_feature_selection_comparison.csv", index=False)

print("\n" + "=" * 70)
print("PHASE 5: EVALUATION & STATISTICAL INFERENCE")
print("=" * 70)

# Optimal 2-feature subset analysis: LSTAT and RM
best_features = ["LSTAT", "RM"]
print(f"Optimal 2-Feature Subset: {best_features}")

X_opt_train = sm.add_constant(X_train[best_features])
X_opt_test = sm.add_constant(X_test[best_features])
ols_opt = sm.OLS(y_train, X_opt_train).fit()

print("\nStatsmodels OLS Summary for Boston Housing (k=2):")
print(ols_opt.summary())

# VIF Multicollinearity Check
print("\nVariance Inflation Factor (VIF):")
X_vif = sm.add_constant(X_train[best_features])
for idx, col in enumerate(best_features):
    vif_val = variance_inflation_factor(X_vif.values, idx + 1)
    print(f"{col:10s}: VIF = {vif_val:.2f} ({'Safe < 5' if vif_val < 5 else 'Collinear >= 5'})")

# Out-of-sample Test Diagnostics
y_opt_pred = ols_opt.predict(X_opt_test)
opt_rmse = np.sqrt(mean_squared_error(y_test, y_opt_pred))
opt_r2 = r2_score(y_test, y_opt_pred)
opt_mae = mean_absolute_error(y_test, y_opt_pred)

print(f"\nOut-of-sample Test Metrics (k=2):")
print(f"Test RMSE : ${opt_rmse * 1000:,.2f} ({opt_rmse:.3f}k)")
print(f"Test R²   : {opt_r2:.4f}")
print(f"Test MAE  : ${opt_mae * 1000:,.2f} ({opt_mae:.3f}k)")

# Top 10 Outliers
residuals = y_test.values - y_opt_pred.values
abs_res = np.abs(residuals)
outliers_df = pd.DataFrame({
    "Original_Index": y_test.index,
    "Actual_MEDV": y_test.values,
    "Predicted_MEDV": y_opt_pred.values,
    "Residual": residuals,
    "Absolute_Residual": abs_res,
    "Pct_Error": (abs_res / y_test.values) * 100
}).sort_values(by="Absolute_Residual", ascending=False)
outliers_df["Rank"] = range(1, len(outliers_df) + 1)

print("\nTop 10 Test Set Outliers / Residual Diagnostics:")
print(outliers_df[["Rank", "Original_Index", "Actual_MEDV", "Predicted_MEDV", "Residual", "Pct_Error"]].round(2).to_string(index=False))
outliers_df.to_csv("boston_top10_outliers.csv", index=False)

# Generate Dual Charts
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))
lasso_res = df_comp[df_comp["Algorithm"] == "Lasso (L1 Ranking)"]

# RMSE Plot
ax1.plot(lasso_res["k"], lasso_res["RMSE"], marker="o", linewidth=2.2, color="#4f46e5", label="Lasso RMSE")
ax1.plot(2, lasso_res.loc[lasso_res["k"] == 2, "RMSE"].values[0], marker="*", markersize=16, color="#10b981", label="Sweet Spot (k=2)")
ax1.set_title("Boston Housing: RMSE by Number of Features", fontsize=13, fontweight="bold")
ax1.set_xlabel("Number of Features (k)", fontsize=11)
ax1.set_ylabel("RMSE ($1,000s)", fontsize=11)
ax1.set_xticks(range(1, 6))
ax1.grid(True, linestyle=":", alpha=0.6)
ax1.legend()

# R² Plot
ax2.plot(lasso_res["k"], lasso_res["R2"], marker="s", linewidth=2.2, color="#059669", label="Lasso R²")
ax2.plot(2, lasso_res.loc[lasso_res["k"] == 2, "R2"].values[0], marker="*", markersize=16, color="#10b981", label="Sweet Spot (k=2)")
ax2.set_title("Boston Housing: R-squared by Number of Features", fontsize=13, fontweight="bold")
ax2.set_xlabel("Number of Features (k)", fontsize=11)
ax2.set_ylabel("R-squared", fontsize=11)
ax2.set_xticks(range(1, 6))
ax2.grid(True, linestyle=":", alpha=0.6)
ax2.legend()

plt.tight_layout()
plt.savefig("boston_progression_plot.png", dpi=300)
plt.close()

print("\n" + "=" * 70)
print("PHASE 6: DEPLOYMENT")
print("=" * 70)
# Interactive deployment prediction example
new_house = pd.DataFrame([{
    "const": 1.0,
    "LSTAT": 12.5,
    "RM": 6.2
}])
pred_sample = ols_opt.predict(new_house)[0]
print(f"Sample Deployment Prediction (LSTAT=12.5%, RM=6.2 rooms):")
print(f"Predicted Median Home Price: ${pred_sample * 1000:,.2f} (${pred_sample:.2f}k)")
print("Saved artifacts: boston_feature_selection_comparison.csv, boston_top10_outliers.csv, boston_progression_plot.png")
