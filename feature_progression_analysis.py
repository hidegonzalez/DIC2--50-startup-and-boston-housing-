"""
FEATURE PROGRESSION & PARSIMONY ANALYSIS
Generates progression CSVs and comparison plots for:
1. 50 Startups (k=1..5)
2. Boston Housing (k=1..5)
Across 5 algorithms: Lasso, Forward SFS, RFE, ElasticNet, Exhaustive Search.
"""

import itertools
import os
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LassoCV, ElasticNetCV
from sklearn.feature_selection import SequentialFeatureSelector, RFE
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score


def run_progression(dataset_name="50startups"):
    if dataset_name == "50startups":
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
        rs = 0
        y_label = "RMSE ($)"
        prefix = "50startups"
    else:
        df = pd.read_csv("BostonHousing.csv")
        df.columns = [c.upper() for c in df.columns]
        target = "MEDV"
        features = [c for c in df.columns if c != target]
        X = df[features].astype(float)
        y = df[target].astype(float)
        rs = 42
        y_label = "RMSE ($1,000s)"
        prefix = "boston"

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=rs
    )
    scaler = StandardScaler()
    X_train_scaled = pd.DataFrame(scaler.fit_transform(X_train), columns=features)
    X_test_scaled = pd.DataFrame(scaler.transform(X_test), columns=features)

    def evaluate_sub(sub):
        lr = LinearRegression().fit(X_train[list(sub)], y_train)
        preds = lr.predict(X_test[list(sub)])
        return np.sqrt(mean_squared_error(y_test, preds)), r2_score(y_test, preds)

    algorithms = {}

    # Lasso
    lasso_cv = LassoCV(cv=5, random_state=rs, max_iter=20000).fit(X_train_scaled, y_train)
    lasso_rank = [f for _, f in sorted(zip(abs(lasso_cv.coef_), features), reverse=True)]
    algorithms["Lasso (L1 Ranking)"] = [lasso_rank[:k] for k in range(1, 6)]

    # Forward SFS
    sfs_subs = []
    for k in range(1, 6):
        if k == len(features):
            sfs_subs.append(features)
        else:
            sfs = SequentialFeatureSelector(LinearRegression(), n_features_to_select=k, direction="forward")
            sfs.fit(X_train, y_train)
            sfs_subs.append(list(X_train.columns[sfs.get_support()]))
    algorithms["Forward SFS"] = sfs_subs

    # RFE
    rfe_subs = []
    for k in range(1, 6):
        if k == len(features):
            rfe_subs.append(features)
        else:
            rfe = RFE(LinearRegression(), n_features_to_select=k)
            rfe.fit(X_train_scaled, y_train)
            rfe_subs.append(list(X_train.columns[rfe.get_support()]))
    algorithms["RFE"] = rfe_subs

    # ElasticNet
    enet_cv = ElasticNetCV(cv=5, random_state=rs, max_iter=20000).fit(X_train_scaled, y_train)
    enet_rank = [f for _, f in sorted(zip(abs(enet_cv.coef_), features), reverse=True)]
    algorithms["ElasticNet Ranking"] = [enet_rank[:k] for k in range(1, 6)]

    # Exhaustive
    ex_subs = []
    for k in range(1, 6):
        best_r = float("inf")
        best_s = None
        for sub in itertools.combinations(features, k):
            r, _ = evaluate_sub(sub)
            if r < best_r:
                best_r = r
                best_s = list(sub)
        ex_subs.append(best_s)
    algorithms["Exhaustive Search"] = ex_subs

    # Save per-algorithm progression CSVs and plot combined comparison
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))
    colors = ["#4f46e5", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
    markers = ["o", "s", "^", "D", "v"]

    for (name, subsets), color, marker in zip(algorithms.items(), colors, markers):
        rows = []
        for k, sub in enumerate(subsets, 1):
            rmse, r2 = evaluate_sub(sub)
            rows.append({
                "Number of Features": k,
                "Selected Features": str(sub),
                "RMSE": rmse,
                "R-squared": r2
            })
        df_prog = pd.DataFrame(rows)
        slug = name.lower().replace(" ", "_").replace("(", "").replace(")", "")
        df_prog.to_csv(f"{prefix}_{slug}_progression.csv", index=False)

        ax1.plot(df_prog["Number of Features"], df_prog["RMSE"], marker=marker, linewidth=2, label=name, color=color)
        ax2.plot(df_prog["Number of Features"], df_prog["R-squared"], marker=marker, linewidth=2, label=name, color=color)

    ax1.set_title(f"{dataset_name.title()}: RMSE by Number of Features", fontsize=12, fontweight="bold")
    ax1.set_xlabel("Number of Features (k)", fontsize=11)
    ax1.set_ylabel(y_label, fontsize=11)
    ax1.set_xticks(range(1, 6))
    ax1.grid(True, linestyle=":", alpha=0.6)
    ax1.legend()

    ax2.set_title(f"{dataset_name.title()}: R-squared by Number of Features", fontsize=12, fontweight="bold")
    ax2.set_xlabel("Number of Features (k)", fontsize=11)
    ax2.set_ylabel("R-squared", fontsize=11)
    ax2.set_xticks(range(1, 6))
    ax2.grid(True, linestyle=":", alpha=0.6)
    ax2.legend()

    plt.tight_layout()
    plt.savefig(f"{prefix}_all_5_algorithms_comparison_plot.png", dpi=300)
    plt.close()
    print(f"Generated {prefix} progression plots and CSVs.")


if __name__ == "__main__":
    run_progression("50startups")
    run_progression("boston")
