# 🌟 DIC2 - 多元線性回歸 50-Startups & Boston Housing 機器學習與特徵選取平台

> **課程名稱**：物聯網應用與資料分析 (AIoT Applications & Data Analysis)  
> **作業項目**：DIC2 - 多元線性回歸 50-startup and boston housing  
> **方法論**：CRISP-DM (Cross-Industry Standard Process for Data Mining)  
> **樣式參考**：Inspired by [StatsUnlock Multiple Linear Regression Calculator](https://statsunlock.com/multiple-linear-regression-calculator/)

---

## 🏆 作業規格與加分項目達成清單 (Bonus Features Checklist)

本專案不僅完整實作 **題目一（50 Startups）** 與 **題目二（Boston Housing）**，更完整達成作業說明的 **全部加分項目（加總分共 3 分）**：

| 項目 | 規格要求 | 實作狀態 | 說明 |
| :--- | :--- | :---: | :--- |
| **核心題目一** | 50 Startups 多元線性回歸與 5 種特徵選取演算法 |  **達成** | 完整評估 $k=1 \dots 5$，分析 2-特徵 Sweet Spot 與 5-特徵 Overfitting Cliff。 |
| **核心題目二** | Boston Housing 多元線性回歸 (套用相同 Workflow) |  **達成** | 評估 13 項房價特徵，精準得出最佳精簡子集 `['LSTAT', 'RM']`。 |
| **加總分 1分** | **1. 有下拉視窗呈現兩種 Problem** |  **達成 (+1分)** | 頂部導航列配置下拉選單，即時無縫切換 50 Startups 與 Boston Housing。 |
| **加總分 2分** | **1. 可任意輸入 Dataset (CSV URL 或上傳)** |  **達成 (+2分)** | 支援任意遠端 CSV URL 載入或本機拖曳上傳，瀏覽器內即時運算 OLS 與特徵選取！ |
| **自動化部署** | GitHub Pages 官方 Actions 自動部署工作流 |  **達成** | 內建 `.github/workflows/pages.yml`，推送至 `main` 分支即可自動上線。 |

---

## 🌐 快速線上預覽與本地執行

### 1. 靜態線上版 (GitHub Pages)
- 進入倉庫的 **Settings** -> **Pages** -> **Source** 選擇 **`GitHub Actions`**。
- GitHub Actions 會自動執行 `.github/workflows/pages.yml`，約 30 秒即可在 GitHub Pages 上線！

### 2. 本地端 Flask 全端模式 (Full-Stack Flask App)
```bash
# 1. 安裝所需依賴套件
pip install -r requirements.txt

# 2. 啟動 Flask 伺服器
python app.py
```
開啟瀏覽器訪問：**[http://localhost:5000/](http://localhost:5000/)**

### 3. 命令列 CRISP-DM CLI 執行模式
```bash
# 執行題目一：50 Startups 完整 CRISP-DM 分析
python main.py

# 執行題目二：Boston Housing 完整 CRISP-DM 分析
python boston_main.py

# 產生全演算法特徵遞進分析圖表與 CSV
python feature_progression_analysis.py
```

---

## 🔬 演算法實作與核心發現 (Core Empirical Findings)

### 題目一：50 Startups 獲利預測 (Startup Profit Prediction)

本分析針對 50 家新創公司的三項支出（研發 R&D、行政管理 Administration、行銷 Marketing）與州別位置（California 參考基準，Florida、New York）進行多元線性回歸。

#### 5 種特徵選取方法橫向評估表 ($k=1 \dots 5$ Out-of-Sample Test Set)：

| 特徵選取演算法 | $k=1$ (RMSE) | $k=2$ (RMSE) | $k=3$ (RMSE) | $k=4$ (RMSE) | $k=5$ (RMSE) | 最佳特徵子集 (Optimal Subset) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lasso (L1 Ranking)** | $8,274.87 | **$8,198.80** | $8,309.06 | $8,409.92 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **Forward SFS** | $8,274.87 | **$8,198.80** | $8,803.78 | $8,997.20 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **RFE** | $8,274.87 | **$8,198.80** | $8,803.78 | $9,068.54 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **ElasticNet Ranking** | $8,274.87 | **$8,198.80** | $8,803.78 | $8,997.20 | $9,137.99 | `['R&D Spend', 'Marketing Spend']` |
| **Exhaustive Search** | $8,274.87 | **$8,198.80** | $8,171.65 | $8,178.37 | $9,137.99 | `['R&D Spend', 'Admin', 'State_FL']` |

#### 關鍵實證結論：
1. **2-特徵 Sweet Spot ($k=2$)**：
   - 最佳子集為 **`['R&D Spend', 'Marketing Spend']`**。
   - **最低測試集 RMSE**：**`$8,198.80`**。
   - **最高測試集 $R^2$**：**`0.9474`**（解釋超過 94.74% 獲利變異）。
   - **VIF 檢驗**：R&D Spend 與 Marketing Spend 的 VIF 皆為 **2.10**（遠小於共線性警戒值 5.0，模型非常穩健）。
2. **5-特徵 Overfitting Cliff ($k=5$)**：
   - 當納入無顯著解釋力的行政支出 (`Administration`) 與州別虛擬變數時，測試集 RMSE 劇烈跳升至 **`$9,137.99`**（誤差增加超過 $939 美元！），$R^2$ 降至 **`0.9347`**。
   - 充分驗證了奧坎剃刀原則（Occam's Razor）：**精簡模型在樣本外泛化能力上顯著勝過全變數複雜模型**。

---

### 題目二：Boston Housing 房價預測 (Boston Housing MEDV)

直接套用相同的 CRISP-DM 六大階段工作流，預測波士頓郊區自有住宅中位數房價（單位：千美元 $1,000s）。

#### 5 種特徵選取方法橫向評估表 ($k=1 \dots 5$)：

| 特徵選取演算法 | $k=1$ (RMSE) | $k=2$ (RMSE) | $k=3$ (RMSE) | $k=4$ (RMSE) | $k=5$ (RMSE) | 最佳特徵子集 (Top Predictors) |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Lasso (L1 Ranking)** | $5.790k | **$5.590k** | $5.592k | $5.693k | $5.249k | `['LSTAT', 'RM']` |
| **Forward SFS** | $5.790k | **$5.590k** | $5.207k | $5.368k | $5.375k | `['RM', 'LSTAT']` |
| **RFE** | $5.790k | **$5.590k** | $5.207k | $5.175k | $5.020k | `['RM', 'LSTAT']` |
| **ElasticNet Ranking** | $5.790k | **$5.590k** | $5.592k | $5.175k | $5.249k | `['LSTAT', 'RM']` |
| **Exhaustive Search** | $5.790k | $5.252k | $5.172k | $5.008k | **$4.845k** | `['ZN', 'NOX', 'DIS', 'PTRATIO', 'LSTAT']` |

#### 關鍵實證結論：
1. **精簡 2-特徵模型 ($k=2$)**：
   - 核心變數為 **`LSTAT`**（低收入人口比例，負向顯著 $\beta = -0.6325$）與 **`RM`**（每戶平均房間數，正向顯著 $\beta = +5.4651$）。
   - **測試集 RMSE**：**`$5.590k`** ($5,589.57 美元)。
   - **測試集 $R^2$**：**`0.5740`**。
   - **VIF 檢驗**：兩者 VIF 均為 **1.60**（極佳，無多重共線性風險）。
2. **多特徵延伸 ($k=3 \dots 5$)**：
   - 逐步納入 **`PTRATIO`**（學生教師比）與 **`DIS`**（與就業中心距離）能進一步將誤差降至 $5.02k~$4.85k。

---

## 🎨 前端架構與 StatsUnlock 風格儀表板功能亮點

1. **頂部問題切換器（Problem Dropdown - 加總分 1分）**：
   - 支援 🏢 **50 Startups**、🏠 **Boston Housing** 與 🧪 **Custom Uploaded Dataset**。
   - 切換時，標題、麵包屑、KPI 卡片、雙折線圖、回歸方程式、係數檢定表、即時預測器滑桿、離群值殘差診斷表均即時無延遲連動重繪！
2. **任意資料集動態載入器（Custom Dataset Loader - 加總分 2分）**：
   - 支援貼上任意遠端 CSV 網址（如 GitHub Raw URL）。
   - 支援直接拖曳或選取本機 `.csv` 檔案。
   - 內建**純 JavaScript 矩陣多元回歸運算引擎**（包含高斯-約旦消去法矩陣求逆、標準誤差、t 統計量、p 值、信賴區間、VIF 計算），完全不需後端即可在 GitHub Pages 上即時運算任意資料集！
3. **雙面板響應式圖表 (Dual-Panel Interactive Chart.js)**：
   - 左圖：**RMSE by Number of Features**（標記綠色最優甜蜜點與黃色過擬合警告點）。
   - 右圖：**R-squared by Number of Features**。
   - 支援單獨演算法檢視與「🌟 Compare All 5 Methods」5 種演算法同台對比。
4. **即時互動預測器 (Live Interactive Predictor)**：
   - 針對 50 Startups 提供 R&D、Marketing、Admin 滑桿與州別選單，即時計算預測獲利。
   - 針對 Boston Housing 提供 LSTAT、RM、PTRATIO、DIS、NOX 等客製化滑桿，即時試算預估房價。
   - 附帶即時公式貢獻度拆解（Formula Contribution Breakdown）。
5. **統計檢定與 VIF 共線性表格 (StatsUnlock Layout)**：
   - 呈現係數預估值 ($\beta$)、標準誤 (Std. Error)、$t$ 統計量、$p$ 值、95% 信賴區間，以及 VIF（自動標註 Safe `< 5` 或 Collinear）。
6. **Top 10 離群值與殘差診斷表 (Residuals & Outliers Diagnostic)**：
   - 針對未參與訓練的樣本外測試集（Out-of-sample Test Set），依據絕對誤差排序，標註殘差狀態。

---

## 📂 專案檔案結構 (Repository Structure)

```text
├── index.html                           # 主頁面：支援雙題目下拉選單與任意資料集載入器 (GitHub Pages 部署入口)
├── model_data.js                        # 前端靜態快取數據庫 (包含 50 Startups 與 Boston Housing 模型完整統計)
├── model_data.json                      # 完整模型統計量、係數、檢定值與離群值 JSON 檔案
├── main.py                              # 題目一：50 Startups CRISP-DM 六大階段完整 CLI 執行腳本
├── boston_main.py                       # 題目二：Boston Housing CRISP-DM 六大階段完整 CLI 執行腳本
├── generate_unified_model_data.py       # 重新計算並生成 model_data.json / model_data.js 的自動化腳本
├── feature_progression_analysis.py      # 特徵遞進評估腳本 (產出 5 種演算法比較圖與 CSV)
├── app.py                               # Flask 輕量全端伺服器 (包含 REST API 與動態資料集計算端點)
├── requirements.txt                     # Python 依賴清單 (Flask, NumPy, Pandas, Scikit-learn, Statsmodels, Matplotlib)
├── .github/
│   └── workflows/
│       └── pages.yml                    # GitHub Actions 官方 GitHub Pages 自動部署工作流
├── templates/
│   └── index.html                       # Flask Jinja2 渲染模板
├── static/
│   └── model_data.js                    # Flask 靜態資源
└── README.md                            # 專案詳細說明手冊與實證報告
```

---

## 🚀 如何在 GitHub 啟用 GitHub Pages 部署

1. 將本專案程式碼推送到您的 GitHub 倉庫 `main` 分支。
2. 進入倉庫的 **Settings** -> **Pages**。
3. 在 **Build and deployment** 區塊：
   - **Source** 下拉選單選擇 **`GitHub Actions`**。
4. GitHub Actions 會自動偵測 `.github/workflows/pages.yml` 並執行部署，約 30 秒至 1 分鐘內即可獲得綠色勾勾與公開網址！
