// Auto-generated Multi-Problem Model Registry
window.MODEL_DATA_REGISTRY = {
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
      "R&D Spend": {
        "name": "R&D Spend",
        "min": 0,
        "max": 250000,
        "default": 100000,
        "step": 5000,
        "unit": "$"
      },
      "Marketing Spend": {
        "name": "Marketing Spend",
        "min": 0,
        "max": 500000,
        "default": 150000,
        "step": 5000,
        "unit": "$"
      },
      "Administration": {
        "name": "Administration",
        "min": 0,
        "max": 250000,
        "default": 120000,
        "step": 5000,
        "unit": "$"
      },
      "State": {
        "name": "State Location",
        "type": "select",
        "options": [
          "California",
          "New York",
          "Florida"
        ],
        "default": "California"
      }
    },
    "models": {
      "Lasso": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822599,
          "mae": 6772.453280477899,
          "r2": 0.9464587607787219,
          "adj_r2": 0.9397661058760621,
          "f_stat": 652.394155235445,
          "f_pvalue": 1.5627804982980067e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.03334204621886622,
              "tstat": 25.54200765866782,
              "pvalue": 1.5627804982979852e-25,
              "ci_lower": 0.7841253560995814,
              "ci_upper": 0.9191202436562932,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756774,
              "residual": 15584.782262432258,
              "abs_error": 15584.782262432258,
              "pct_error": 19.186215207257426
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508352,
              "residual": 11959.80397491649,
              "abs_error": 11959.80397491649,
              "pct_error": 6.2600259412799355
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516923,
              "residual": 10914.149804830784,
              "abs_error": 10914.149804830784,
              "pct_error": 7.469206238235107
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.8341057847,
              "residual": 10108.56589421528,
              "abs_error": 10108.56589421528,
              "pct_error": 7.00721470782166
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855634,
              "residual": 5628.285711443663,
              "abs_error": 5628.285711443663,
              "pct_error": 7.234409195412916
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586336,
              "residual": -4816.463865863363,
              "abs_error": 4816.463865863363,
              "pct_error": 4.586745435540638
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.148435391,
              "residual": -3250.2084353909886,
              "abs_error": 3250.2084353909886,
              "pct_error": 1.9557426582163473
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138655,
              "residual": -2997.872771386552,
              "abs_error": 2997.872771386552,
              "pct_error": 3.075259840106939
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997859,
              "residual": -1384.8980599785864,
              "abs_error": 1384.8980599785864,
              "pct_error": 1.340885115136373
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432103,
              "residual": -1079.502024321031,
              "abs_error": 1079.502024321031,
              "pct_error": 0.9782329080929759
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.797190788488,
          "mae": 6886.594588246509,
          "r2": 0.9474386447268488,
          "adj_r2": 0.9324211146488056,
          "f_stat": 349.041043295694,
          "f_pvalue": 9.649812292514527e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.338761236504,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245256,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.04183443697,
              "ci_upper": 52366.63568803604,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.046813375749335515,
              "tstat": 16.846003675640823,
              "pvalue": 6.12036580385473e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.0989116309034443
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03257662731702046,
              "stderr": 0.01751414004366079,
              "tstat": 1.86001866125374,
              "pvalue": 0.07084678339897671,
              "ci_lower": -0.0029103912358813475,
              "ci_upper": 0.06806364586992228,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312015,
              "residual": 12893.984246879845,
              "abs_error": 12893.984246879845,
              "pct_error": 15.873610068711672
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650103,
              "residual": 11939.800483498984,
              "abs_error": 11939.800483498984,
              "pct_error": 8.171120412435629
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.252997361,
              "residual": 10408.137002639007,
              "abs_error": 10408.137002639007,
              "pct_error": 5.4478491264210485
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.92383811908,
              "residual": 10385.476161880913,
              "abs_error": 10385.476161880913,
              "pct_error": 7.199167722783343
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894303,
              "residual": -9708.939038943034,
              "abs_error": 9708.939038943034,
              "pct_error": 9.245876863405414
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452149,
              "residual": -4228.671364521491,
              "abs_error": 4228.671364521491,
              "pct_error": 3.831975663859587
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498419,
              "residual": -4155.379794984183,
              "abs_error": 4155.379794984183,
              "pct_error": 2.500409954527496
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630343,
              "residual": 4097.723063696569,
              "abs_error": 4097.723063696569,
              "pct_error": 5.2670754350631865
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182887,
              "residual": 997.7339481711388,
              "abs_error": 997.7339481711388,
              "pct_error": 0.9660253260731779
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922275007,
              "residual": 50.1007772499288,
              "abs_error": 50.1007772499288,
              "pct_error": 0.05139407839632529
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York"
          ],
          "rmse": 8309.05968348172,
          "mae": 7028.435331818955,
          "r2": 0.9460153830071389,
          "adj_r2": 0.9190230745107084,
          "f_stat": 226.87486169664254,
          "f_pvalue": 1.979614337168431e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46100.29130552143,
              "stderr": 3147.838657108469,
              "tstat": 14.645061684282155,
              "pvalue": 9.731182635477905e-17,
              "ci_lower": 39716.178608985385,
              "ci_upper": 52484.404002057476,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7858709815060038,
              "stderr": 0.04852130487882812,
              "tstat": 16.19641069976484,
              "pvalue": 4.132453042696614e-18,
              "ci_lower": 0.687465214161509,
              "ci_upper": 0.8842767488504986,
              "vif": 2.198239677545834
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03327182941052395,
              "stderr": 0.01792923708958087,
              "tstat": 1.8557303495004283,
              "pvalue": 0.07169341083644386,
              "ci_lower": -0.0030903487730112034,
              "ci_upper": 0.0696340075940591,
              "vif": 2.1443516305471273
            },
            {
              "feature": "State_New York",
              "coef": 864.0018700527362,
              "stderr": 3243.669370520946,
              "tstat": 0.2663655790275487,
              "pvalue": 0.7914774340467409,
              "ci_lower": -5714.464521464827,
              "ci_upper": 7442.4682615703,
              "vif": 1.0475449583683516
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133815.4275493898,
              "residual": 12306.52245061021,
              "abs_error": 12306.52245061021,
              "pct_error": 8.422090213421193
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 69026.24972723081,
              "residual": 12202.810272769188,
              "abs_error": 12202.810272769188,
              "pct_error": 15.022715113001661
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180258.2497985387,
              "residual": 10792.140201461327,
              "abs_error": 10792.140201461327,
              "pct_error": 5.648844894512556
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133524.92138467255,
              "residual": 10734.478615327447,
              "abs_error": 10734.478615327447,
              "pct_error": 7.441094733048555
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115382.63503846529,
              "residual": -10374.325038465293,
              "abs_error": 10374.325038465293,
              "pct_error": 9.879527666396395
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73492.7691291159,
              "residual": 4306.060870884103,
              "abs_error": 4306.060870884103,
              "pct_error": 5.534865846805284
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114342.45547445389,
              "residual": -3990.205474453891,
              "abs_error": 3990.205474453891,
              "pct_error": 3.6158804867629715
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169961.41927630414,
              "residual": -3773.4792763041332,
              "abs_error": 3773.4792763041332,
              "pct_error": 2.270609573898162
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 101939.27091345852,
              "residual": 1343.109086541488,
              "abs_error": 1343.109086541488,
              "pct_error": 1.3004242219645674
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97944.78203137247,
              "residual": -461.22203137246834,
              "abs_error": 461.22203137246834,
              "pct_error": 0.47312801396714316
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York",
            "State_Florida"
          ],
          "rmse": 8409.916714488052,
          "mae": 7109.161997627585,
          "r2": 0.9446968769428332,
          "adj_r2": 0.9004543784970997,
          "f_stat": 165.6435912721811,
          "f_pvalue": 3.194559305353628e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46329.06017855461,
              "stderr": 3375.873004798011,
              "tstat": 13.723579089826165,
              "pvalue": 1.191386097156233e-15,
              "ci_lower": 39475.673626747855,
              "ci_upper": 53182.446730361364,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7851417173101011,
              "stderr": 0.049304958610736555,
              "tstat": 15.924193822142872,
              "pvalue": 1.3176709338117511e-17,
              "ci_lower": 0.6850473299323898,
              "ci_upper": 0.8852361046878123,
              "vif": 2.209480154957115
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.033956402340637404,
              "stderr": 0.01846982048278783,
              "tstat": 1.8384803670550909,
              "pvalue": 0.07449011466954761,
              "ci_lower": -0.0035393266548307406,
              "ci_upper": 0.07145213133610555,
              "vif": 2.2151163355308676
            },
            {
              "feature": "State_New York",
              "coef": 554.6573328267041,
              "stderr": 3610.2679105794805,
              "tstat": 0.15363328887624758,
              "pvalue": 0.8787812965687318,
              "ci_lower": -6774.576175548499,
              "ci_upper": 7883.890841201907,
              "vif": 1.2632147347934317
            },
            {
              "feature": "State_Florida",
              "coef": -826.468158761938,
              "stderr": 3985.466462497064,
              "tstat": -0.20737049641213653,
              "pvalue": 0.8369223722742579,
              "ci_lower": -8917.395222053077,
              "ci_upper": 7264.4589045292005,
              "vif": 1.268751326611038
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133300.28408634168,
              "residual": 12821.665913658333,
              "abs_error": 12821.665913658333,
              "pct_error": 8.774633731385553
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 69057.74881968717,
              "residual": 12171.311180312827,
              "abs_error": 12171.311180312827,
              "pct_error": 14.983937005195958
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179827.9120567525,
              "residual": 11222.477943247504,
              "abs_error": 11222.477943247504,
              "pct_error": 5.8740931872724795
            },
            {
              "rank": 4,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115491.253959,
              "residual": -10482.943958999997,
              "abs_error": 10482.943958999997,
              "pct_error": 9.982966070970951
            },
            {
              "rank": 5,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133851.2421601261,
              "residual": 10408.157839873893,
              "abs_error": 10408.157839873893,
              "pct_error": 7.21489056510279
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72987.32073135999,
              "residual": 4811.509268640017,
              "abs_error": 4811.509268640017,
              "pct_error": 6.184552220952445
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113898.43875999088,
              "residual": -3546.1887599908805,
              "abs_error": 3546.1887599908805,
              "pct_error": 3.2135174044850743
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169510.75518374197,
              "residual": -3322.815183741972,
              "abs_error": 3322.815183741972,
              "pct_error": 1.9994321993172137
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 101374.28367857917,
              "residual": 1908.0963214208314,
              "abs_error": 1908.0963214208314,
              "pct_error": 1.847455801677722
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97880.01360638959,
              "residual": -396.4536063895939,
              "abs_error": 396.4536063895939,
              "pct_error": 0.4066876572722559
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "State_New York",
            "State_Florida",
            "Administration"
          ],
          "rmse": 9137.990152792128,
          "mae": 7514.293659638899,
          "r2": 0.9347068473282827,
          "adj_r2": 0.853090406488636,
          "f_stat": 129.70441863373304,
          "f_pvalue": 3.907703841869218e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.167617716725,
              "stderr": 8358.538206728012,
              "tstat": 5.0911016454364875,
              "pvalue": 1.308676033596399e-05,
              "ci_lower": 25567.574241171355,
              "ci_upper": 59540.76099426209,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.773467192772863,
              "stderr": 0.05514906906560663,
              "tstat": 14.025027183191945,
              "pvalue": 1.0686978470486467e-15,
              "ci_lower": 0.6613907999703003,
              "ci_upper": 0.8855435855754258,
              "vif": 2.704652545511513
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.0366100258541206,
              "stderr": 0.019427464933210785,
              "tstat": 1.8844468889781207,
              "pvalue": 0.0680773902398534,
              "ci_lower": -0.0028713330863595413,
              "ci_upper": 0.07609138479460073,
              "vif": 2.397892228295729
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525193815,
              "stderr": 3661.5627273603045,
              "tstat": 0.19100288718078878,
              "pvalue": 0.8496593413793933,
              "ci_lower": -6741.821695681008,
              "ci_upper": 8140.559800719771,
              "vif": 1.271327610744667
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600575484,
              "stderr": 4038.107721379594,
              "tstat": -0.23755784299132443,
              "pvalue": 0.8136497729180235,
              "ci_lower": -9165.706404864712,
              "ci_upper": 7247.138084749615,
              "vif": 1.2743836566980131
            },
            {
              "feature": "Administration",
              "coef": 0.03288459752812389,
              "stderr": 0.0664682099972459,
              "tstat": 0.49474173487576184,
              "pvalue": 0.6239644296762069,
              "ci_lower": -0.10219505728295616,
              "ci_upper": 0.16796425233920395,
              "vif": 1.2341074098600409
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.7384517484,
              "residual": 13674.211548251624,
              "abs_error": 13674.211548251624,
              "pct_error": 9.358081758593848
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.6920967583,
              "residual": 13377.367903241699,
              "abs_error": 13377.367903241699,
              "pct_error": 16.468697167296654
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.4822105534,
              "residual": 12512.907789446617,
              "abs_error": 12512.907789446617,
              "pct_error": 6.549532711996357
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.2776081605,
              "residual": 11677.122391839483,
              "abs_error": 11677.122391839483,
              "pct_error": 8.094531373234245
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.2423016443,
              "residual": -11152.932301644309,
              "abs_error": 11152.932301644309,
              "pct_error": 10.62099971101745
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851258081,
              "residual": 5822.731487419194,
              "abs_error": 5822.731487419194,
              "pct_error": 7.484343257371857
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43533012088,
              "residual": -3617.1853301208757,
              "abs_error": 3617.1853301208757,
              "pct_error": 3.2778537185430072
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.06569550865,
              "residual": -1733.1256955086428,
              "abs_error": 1733.1256955086428,
              "pct_error": 1.042870918015256
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.73374687429,
              "residual": -1308.173746874294,
              "abs_error": 1308.173746874294,
              "pct_error": 1.3419429356850467
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.20159795776,
              "residual": 267.1784020422492,
              "abs_error": 267.1784020422492,
              "pct_error": 0.25868730178588956
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822599,
          "mae": 6772.453280477899,
          "r2": 0.9464587607787219,
          "adj_r2": 0.9397661058760621,
          "f_stat": 652.394155235445,
          "f_pvalue": 1.5627804982980067e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.03334204621886622,
              "tstat": 25.54200765866782,
              "pvalue": 1.5627804982979852e-25,
              "ci_lower": 0.7841253560995814,
              "ci_upper": 0.9191202436562932,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756774,
              "residual": 15584.782262432258,
              "abs_error": 15584.782262432258,
              "pct_error": 19.186215207257426
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508352,
              "residual": 11959.80397491649,
              "abs_error": 11959.80397491649,
              "pct_error": 6.2600259412799355
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516923,
              "residual": 10914.149804830784,
              "abs_error": 10914.149804830784,
              "pct_error": 7.469206238235107
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.8341057847,
              "residual": 10108.56589421528,
              "abs_error": 10108.56589421528,
              "pct_error": 7.00721470782166
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855634,
              "residual": 5628.285711443663,
              "abs_error": 5628.285711443663,
              "pct_error": 7.234409195412916
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586336,
              "residual": -4816.463865863363,
              "abs_error": 4816.463865863363,
              "pct_error": 4.586745435540638
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.148435391,
              "residual": -3250.2084353909886,
              "abs_error": 3250.2084353909886,
              "pct_error": 1.9557426582163473
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138655,
              "residual": -2997.872771386552,
              "abs_error": 2997.872771386552,
              "pct_error": 3.075259840106939
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997859,
              "residual": -1384.8980599785864,
              "abs_error": 1384.8980599785864,
              "pct_error": 1.340885115136373
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432103,
              "residual": -1079.502024321031,
              "abs_error": 1079.502024321031,
              "pct_error": 0.9782329080929759
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.797190788488,
          "mae": 6886.594588246509,
          "r2": 0.9474386447268488,
          "adj_r2": 0.9324211146488056,
          "f_stat": 349.041043295694,
          "f_pvalue": 9.649812292514527e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.338761236504,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245256,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.04183443697,
              "ci_upper": 52366.63568803604,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.046813375749335515,
              "tstat": 16.846003675640823,
              "pvalue": 6.12036580385473e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.0989116309034443
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03257662731702046,
              "stderr": 0.01751414004366079,
              "tstat": 1.86001866125374,
              "pvalue": 0.07084678339897671,
              "ci_lower": -0.0029103912358813475,
              "ci_upper": 0.06806364586992228,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312015,
              "residual": 12893.984246879845,
              "abs_error": 12893.984246879845,
              "pct_error": 15.873610068711672
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650103,
              "residual": 11939.800483498984,
              "abs_error": 11939.800483498984,
              "pct_error": 8.171120412435629
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.252997361,
              "residual": 10408.137002639007,
              "abs_error": 10408.137002639007,
              "pct_error": 5.4478491264210485
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.92383811908,
              "residual": 10385.476161880913,
              "abs_error": 10385.476161880913,
              "pct_error": 7.199167722783343
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894303,
              "residual": -9708.939038943034,
              "abs_error": 9708.939038943034,
              "pct_error": 9.245876863405414
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452149,
              "residual": -4228.671364521491,
              "abs_error": 4228.671364521491,
              "pct_error": 3.831975663859587
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498419,
              "residual": -4155.379794984183,
              "abs_error": 4155.379794984183,
              "pct_error": 2.500409954527496
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630343,
              "residual": 4097.723063696569,
              "abs_error": 4097.723063696569,
              "pct_error": 5.2670754350631865
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182887,
              "residual": 997.7339481711388,
              "abs_error": 997.7339481711388,
              "pct_error": 0.9660253260731779
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922275007,
              "residual": 50.1007772499288,
              "abs_error": 50.1007772499288,
              "pct_error": 0.05139407839632529
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "rmse": 8803.775790469348,
          "mae": 7320.441614848128,
          "r2": 0.939395591782057,
          "adj_r2": 0.9090933876730856,
          "f_stat": 227.7949898267994,
          "f_pvalue": 1.8474317896878538e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.00816508671,
              "stderr": 7919.772517103605,
              "tstat": 5.428060979308092,
              "pvalue": 4.041216456576364e-06,
              "ci_lower": 26926.965034019042,
              "ci_upper": 59051.05129615437,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821669,
              "stderr": 0.05191103443957785,
              "tstat": 15.003381313633877,
              "pvalue": 4.59257871597886e-17,
              "ci_lower": 0.6735605865505695,
              "ci_upper": 0.8841215016137643,
              "vif": 2.525800946293161
            },
            {
              "feature": "Administration",
              "coef": 0.0293918990975523,
              "stderr": 0.06415469322089741,
              "tstat": 0.45814105908588987,
              "pvalue": 0.6496046941992151,
              "ci_lower": -0.1007198493584909,
              "ci_upper": 0.1595036475535955,
              "vif": 1.2117875999957919
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03471025486941995,
              "stderr": 0.01830648249083701,
              "tstat": 1.8960635876823175,
              "pvalue": 0.0660003719412498,
              "ci_lower": -0.002417012449300239,
              "ci_upper": 0.07183752218814013,
              "vif": 2.244149821335617
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570192,
              "residual": 14115.483094298077,
              "abs_error": 14115.483094298077,
              "pct_error": 17.377380821959626
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.90370043818,
              "residual": 12554.046299561829,
              "abs_error": 12554.046299561829,
              "pct_error": 8.591485604703351
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.05993125628,
              "residual": 11496.34006874371,
              "abs_error": 11496.34006874371,
              "pct_error": 7.9692138389205205
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.9256722371,
              "residual": 11422.464327762922,
              "abs_error": 11422.464327762922,
              "pct_error": 5.978770484458535
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.6486479528,
              "residual": -10158.338647952798,
              "abs_error": 10158.338647952798,
              "pct_error": 9.673842620600977
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.7897673575,
              "residual": 4887.0402326424955,
              "abs_error": 4887.0402326424955,
              "pct_error": 6.281637182259034
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.11555221118,
              "residual": -4403.86555221118,
              "abs_error": 4403.86555221118,
              "pct_error": 3.990734717426405
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.01408794578,
              "residual": -2876.0740879457735,
              "abs_error": 2876.0740879457735,
              "pct_error": 1.7306154032270773
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.80686776247,
              "residual": -671.2468677624711,
              "abs_error": 671.2468677624711,
              "pct_error": 0.6885744301526032
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.89696960003,
              "residual": -619.516969600023,
              "abs_error": 619.516969600023,
              "pct_error": 0.5998283246377775
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_New York"
          ],
          "rmse": 8997.199285980292,
          "mae": 7474.7406263471885,
          "r2": 0.9367033175958572,
          "adj_r2": 0.886065971672543,
          "f_stat": 166.6080061491102,
          "f_pvalue": 2.9014566723283526e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42410.30908342112,
              "stderr": 8223.431866814515,
              "tstat": 5.157251834792603,
              "pvalue": 9.970354548171019e-06,
              "ci_lower": 25715.854853174453,
              "ci_upper": 59104.76331366778,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7746825805494232,
              "stderr": 0.05416600846008525,
              "tstat": 14.302006047211032,
              "pvalue": 3.47501729722318e-16,
              "ci_lower": 0.664719737332929,
              "ci_upper": 0.8846454237659174,
              "vif": 2.6813755945236446
            },
            {
              "feature": "Administration",
              "coef": 0.031834868252112014,
              "stderr": 0.06542107908210054,
              "tstat": 0.4866148449211709,
              "pvalue": 0.629564702203273,
              "ci_lower": -0.10097698306715297,
              "ci_upper": 0.164646719571377,
              "vif": 1.2286530866987377
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03573424378559634,
              "stderr": 0.018815596804102306,
              "tstat": 1.8991820539971025,
              "pvalue": 0.06580770448112123,
              "ci_lower": -0.0024634484611735716,
              "ci_upper": 0.07393193603236625,
              "vif": 2.311544534234606
            },
            {
              "feature": "State_New York",
              "coef": 1052.2198800537117,
              "stderr": 3301.345841423615,
              "tstat": 0.31872452345070595,
              "pvalue": 0.7518297387033931,
              "ci_lower": -5649.868486516669,
              "ci_upper": 7754.308246624092,
              "vif": 1.0621245394485346
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67853.79186123732,
              "residual": 13375.26813876268,
              "abs_error": 13375.26813876268,
              "pct_error": 16.466112175571997
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133070.2390635292,
              "residual": 13051.710936470801,
              "abs_error": 13051.710936470801,
              "pct_error": 8.9320673153286
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132245.69745454332,
              "residual": 12013.702545456676,
              "abs_error": 12013.702545456676,
              "pct_error": 8.327847298308932
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179075.96157197986,
              "residual": 11974.428428020154,
              "abs_error": 11974.428428020154,
              "pct_error": 6.267680703515001
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116014.33808117363,
              "residual": -11006.02808117363,
              "abs_error": 11006.02808117363,
              "pct_error": 10.481102001521242
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72592.46097857333,
              "residual": 5206.369021426668,
              "abs_error": 5206.369021426668,
              "pct_error": 6.692091669536248
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114480.26282334967,
              "residual": -4128.012823349665,
              "abs_error": 4128.012823349665,
              "pct_error": 3.7407599966014877
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168492.58649269515,
              "residual": -2304.646492695145,
              "abs_error": 2304.646492695145,
              "pct_error": 1.3867712017461344
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98837.47482909175,
              "residual": -1353.914829091751,
              "abs_error": 1353.914829091751,
              "pct_error": 1.3888647779089633
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103615.70496702472,
              "residual": -333.3249670247169,
              "abs_error": 333.3249670247169,
              "pct_error": 0.3227316866872325
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152794957,
          "mae": 7514.293659640612,
          "r2": 0.9347068473282423,
          "adj_r2": 0.8530904064885452,
          "f_stat": 129.70441863373287,
          "f_pvalue": 3.9077038418693004e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773242,
              "stderr": 8358.538206708883,
              "tstat": 5.091101645450016,
              "pvalue": 1.308676033543497e-05,
              "ci_lower": 25567.57424122592,
              "ci_upper": 59540.76099423892,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722886,
              "stderr": 0.055149069065509274,
              "tstat": 14.025027183206289,
              "pvalue": 1.0686978470168071e-15,
              "ci_lower": 0.6613907999699238,
              "ci_upper": 0.8855435855746534,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.03288459752803641,
              "stderr": 0.06646820999717504,
              "tstat": 0.4947417348749731,
              "pvalue": 0.6239644296767579,
              "ci_lower": -0.10219505728289965,
              "ci_upper": 0.16796425233897247,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429951,
              "stderr": 0.019427464933191935,
              "tstat": 1.8844468889891584,
              "pvalue": 0.06807739023831669,
              "ci_lower": -0.002871333086142319,
              "ci_upper": 0.07609138479474134,
              "vif": 2.397892228295729
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600570914,
              "stderr": 4038.1077213805197,
              "tstat": -0.2375578429911568,
              "pvalue": 0.8136497729181524,
              "ci_lower": -9165.706404866138,
              "ci_upper": 7247.138084751954,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192869,
              "stderr": 3661.5627273597242,
              "tstat": 0.19100288718079322,
              "pvalue": 0.8496593413793897,
              "ci_lower": -6741.821695679923,
              "ci_upper": 8140.559800718497,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845174478,
              "residual": 13674.211548255233,
              "abs_error": 13674.211548255233,
              "pct_error": 9.358081758596319
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209675622,
              "residual": 13377.36790324378,
              "abs_error": 13377.36790324378,
              "pct_error": 16.468697167299215
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221055063,
              "residual": 12512.907789449382,
              "abs_error": 12512.907789449382,
              "pct_error": 6.549532711997803
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760815565,
              "residual": 11677.122391844343,
              "abs_error": 11677.122391844343,
              "pct_error": 8.094531373237615
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230165101,
              "residual": -11152.932301651017,
              "abs_error": 11152.932301651017,
              "pct_error": 10.620999711023838
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851257896,
              "residual": 5822.731487421042,
              "abs_error": 5822.731487421042,
              "pct_error": 7.484343257374233
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43533012443,
              "residual": -3617.1853301244264,
              "abs_error": 3617.1853301244264,
              "pct_error": 3.2778537185462246
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656955042,
              "residual": -1733.12569550419,
              "abs_error": 1733.12569550419,
              "pct_error": 1.0428709180125766
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337468745,
              "residual": -1308.1737468744977,
              "abs_error": 1308.1737468744977,
              "pct_error": 1.341942935685256
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.2015979618,
              "residual": 267.1784020382038,
              "abs_error": 267.1784020382038,
              "pct_error": 0.25868730178197263
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822599,
          "mae": 6772.453280477899,
          "r2": 0.9464587607787219,
          "adj_r2": 0.9397661058760621,
          "f_stat": 652.394155235445,
          "f_pvalue": 1.5627804982980067e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.03334204621886622,
              "tstat": 25.54200765866782,
              "pvalue": 1.5627804982979852e-25,
              "ci_lower": 0.7841253560995814,
              "ci_upper": 0.9191202436562932,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756774,
              "residual": 15584.782262432258,
              "abs_error": 15584.782262432258,
              "pct_error": 19.186215207257426
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508352,
              "residual": 11959.80397491649,
              "abs_error": 11959.80397491649,
              "pct_error": 6.2600259412799355
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516923,
              "residual": 10914.149804830784,
              "abs_error": 10914.149804830784,
              "pct_error": 7.469206238235107
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.8341057847,
              "residual": 10108.56589421528,
              "abs_error": 10108.56589421528,
              "pct_error": 7.00721470782166
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855634,
              "residual": 5628.285711443663,
              "abs_error": 5628.285711443663,
              "pct_error": 7.234409195412916
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586336,
              "residual": -4816.463865863363,
              "abs_error": 4816.463865863363,
              "pct_error": 4.586745435540638
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.148435391,
              "residual": -3250.2084353909886,
              "abs_error": 3250.2084353909886,
              "pct_error": 1.9557426582163473
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138655,
              "residual": -2997.872771386552,
              "abs_error": 2997.872771386552,
              "pct_error": 3.075259840106939
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997859,
              "residual": -1384.8980599785864,
              "abs_error": 1384.8980599785864,
              "pct_error": 1.340885115136373
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432103,
              "residual": -1079.502024321031,
              "abs_error": 1079.502024321031,
              "pct_error": 0.9782329080929759
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.797190788488,
          "mae": 6886.594588246509,
          "r2": 0.9474386447268488,
          "adj_r2": 0.9324211146488056,
          "f_stat": 349.041043295694,
          "f_pvalue": 9.649812292514527e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.338761236504,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245256,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.04183443697,
              "ci_upper": 52366.63568803604,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.046813375749335515,
              "tstat": 16.846003675640823,
              "pvalue": 6.12036580385473e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.0989116309034443
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03257662731702046,
              "stderr": 0.01751414004366079,
              "tstat": 1.86001866125374,
              "pvalue": 0.07084678339897671,
              "ci_lower": -0.0029103912358813475,
              "ci_upper": 0.06806364586992228,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312015,
              "residual": 12893.984246879845,
              "abs_error": 12893.984246879845,
              "pct_error": 15.873610068711672
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650103,
              "residual": 11939.800483498984,
              "abs_error": 11939.800483498984,
              "pct_error": 8.171120412435629
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.252997361,
              "residual": 10408.137002639007,
              "abs_error": 10408.137002639007,
              "pct_error": 5.4478491264210485
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.92383811908,
              "residual": 10385.476161880913,
              "abs_error": 10385.476161880913,
              "pct_error": 7.199167722783343
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894303,
              "residual": -9708.939038943034,
              "abs_error": 9708.939038943034,
              "pct_error": 9.245876863405414
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452149,
              "residual": -4228.671364521491,
              "abs_error": 4228.671364521491,
              "pct_error": 3.831975663859587
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498419,
              "residual": -4155.379794984183,
              "abs_error": 4155.379794984183,
              "pct_error": 2.500409954527496
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630343,
              "residual": 4097.723063696569,
              "abs_error": 4097.723063696569,
              "pct_error": 5.2670754350631865
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182887,
              "residual": 997.7339481711388,
              "abs_error": 997.7339481711388,
              "pct_error": 0.9660253260731779
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922275007,
              "residual": 50.1007772499288,
              "abs_error": 50.1007772499288,
              "pct_error": 0.05139407839632529
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend"
          ],
          "rmse": 8803.775790469348,
          "mae": 7320.441614848128,
          "r2": 0.939395591782057,
          "adj_r2": 0.9090933876730856,
          "f_stat": 227.7949898267994,
          "f_pvalue": 1.8474317896878538e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.00816508671,
              "stderr": 7919.772517103605,
              "tstat": 5.428060979308092,
              "pvalue": 4.041216456576364e-06,
              "ci_lower": 26926.965034019042,
              "ci_upper": 59051.05129615437,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821669,
              "stderr": 0.05191103443957785,
              "tstat": 15.003381313633877,
              "pvalue": 4.59257871597886e-17,
              "ci_lower": 0.6735605865505695,
              "ci_upper": 0.8841215016137643,
              "vif": 2.525800946293161
            },
            {
              "feature": "Administration",
              "coef": 0.0293918990975523,
              "stderr": 0.06415469322089741,
              "tstat": 0.45814105908588987,
              "pvalue": 0.6496046941992151,
              "ci_lower": -0.1007198493584909,
              "ci_upper": 0.1595036475535955,
              "vif": 1.2117875999957919
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03471025486941995,
              "stderr": 0.01830648249083701,
              "tstat": 1.8960635876823175,
              "pvalue": 0.0660003719412498,
              "ci_lower": -0.002417012449300239,
              "ci_upper": 0.07183752218814013,
              "vif": 2.244149821335617
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570192,
              "residual": 14115.483094298077,
              "abs_error": 14115.483094298077,
              "pct_error": 17.377380821959626
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.90370043818,
              "residual": 12554.046299561829,
              "abs_error": 12554.046299561829,
              "pct_error": 8.591485604703351
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.05993125628,
              "residual": 11496.34006874371,
              "abs_error": 11496.34006874371,
              "pct_error": 7.9692138389205205
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.9256722371,
              "residual": 11422.464327762922,
              "abs_error": 11422.464327762922,
              "pct_error": 5.978770484458535
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.6486479528,
              "residual": -10158.338647952798,
              "abs_error": 10158.338647952798,
              "pct_error": 9.673842620600977
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.7897673575,
              "residual": 4887.0402326424955,
              "abs_error": 4887.0402326424955,
              "pct_error": 6.281637182259034
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.11555221118,
              "residual": -4403.86555221118,
              "abs_error": 4403.86555221118,
              "pct_error": 3.990734717426405
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.01408794578,
              "residual": -2876.0740879457735,
              "abs_error": 2876.0740879457735,
              "pct_error": 1.7306154032270773
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.80686776247,
              "residual": -671.2468677624711,
              "abs_error": 671.2468677624711,
              "pct_error": 0.6885744301526032
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.89696960003,
              "residual": -619.516969600023,
              "abs_error": 619.516969600023,
              "pct_error": 0.5998283246377775
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida"
          ],
          "rmse": 9068.54118486935,
          "mae": 7431.473270412901,
          "r2": 0.9356955353592089,
          "adj_r2": 0.884251963646576,
          "f_stat": 166.71079812740047,
          "f_pvalue": 2.87193703308411e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42922.43234050127,
              "stderr": 8020.396797666897,
              "tstat": 5.351659453181573,
              "pvalue": 5.52962587399146e-06,
              "ci_lower": 26640.16121384404,
              "ci_upper": 59204.7034671585,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7753799290162727,
              "stderr": 0.0534805511079929,
              "tstat": 14.498353381784595,
              "pvalue": 2.3058263602672752e-16,
              "ci_lower": 0.6668086382047387,
              "ci_upper": 0.8839512198278068,
              "vif": 2.6154729650389004
            },
            {
              "feature": "Administration",
              "coef": 0.03187042324768313,
              "stderr": 0.0653374448069948,
              "tstat": 0.48778190426374307,
              "pvalue": 0.6287460582525713,
              "ci_lower": -0.10077164146661621,
              "ci_upper": 0.16451248796198248,
              "vif": 1.2262320516580507
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03632705952879389,
              "stderr": 0.0191024039891739,
              "tstat": 1.9017009350960172,
              "pvalue": 0.0654670336258443,
              "ci_lower": -0.0024528822582690207,
              "ci_upper": 0.0751070013158568,
              "vif": 2.3839482387938506
            },
            {
              "feature": "State_Florida",
              "coef": -1272.1607867793937,
              "stderr": 3639.780492735839,
              "tstat": -0.34951579891104223,
              "pvalue": 0.7287964395044179,
              "ci_lower": -8661.30802217336,
              "ci_upper": 6116.9864486145725,
              "vif": 1.0646776983458153
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67439.97515767507,
              "residual": 13789.084842324926,
              "abs_error": 13789.084842324926,
              "pct_error": 16.975556337011565
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132521.05285610055,
              "residual": 13600.897143899463,
              "abs_error": 13600.897143899463,
              "pct_error": 9.307908321713104
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178668.3524914053,
              "residual": 12382.037508594716,
              "abs_error": 12382.037508594716,
              "pct_error": 6.48103231225789
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132979.3402644851,
              "residual": 11280.059735514893,
              "abs_error": 11280.059735514893,
              "pct_error": 7.819289235581802
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115738.44472844567,
              "residual": -10730.134728445671,
              "abs_error": 10730.134728445671,
              "pct_error": 10.218367221075809
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71952.38725075763,
              "residual": 5846.442749242371,
              "abs_error": 5846.442749242371,
              "pct_error": 7.514820915998828
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113956.00325905213,
              "residual": -3603.7532590521296,
              "abs_error": 3603.7532590521296,
              "pct_error": 3.2656817228938513
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168051.9671369674,
              "residual": -1864.027136967401,
              "abs_error": 1864.027136967401,
              "pct_error": 1.1216380303934215
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98397.73803877179,
              "residual": -914.1780387717881,
              "abs_error": 914.1780387717881,
              "pct_error": 0.9377766248706839
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102978.26243868435,
              "residual": 304.117561315652,
              "abs_error": 304.117561315652,
              "pct_error": 0.294452510985564
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152794957,
          "mae": 7514.293659640612,
          "r2": 0.9347068473282423,
          "adj_r2": 0.8530904064885452,
          "f_stat": 129.70441863373287,
          "f_pvalue": 3.9077038418693004e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773242,
              "stderr": 8358.538206708883,
              "tstat": 5.091101645450016,
              "pvalue": 1.308676033543497e-05,
              "ci_lower": 25567.57424122592,
              "ci_upper": 59540.76099423892,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722886,
              "stderr": 0.055149069065509274,
              "tstat": 14.025027183206289,
              "pvalue": 1.0686978470168071e-15,
              "ci_lower": 0.6613907999699238,
              "ci_upper": 0.8855435855746534,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.03288459752803641,
              "stderr": 0.06646820999717504,
              "tstat": 0.4947417348749731,
              "pvalue": 0.6239644296767579,
              "ci_lower": -0.10219505728289965,
              "ci_upper": 0.16796425233897247,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429951,
              "stderr": 0.019427464933191935,
              "tstat": 1.8844468889891584,
              "pvalue": 0.06807739023831669,
              "ci_lower": -0.002871333086142319,
              "ci_upper": 0.07609138479474134,
              "vif": 2.397892228295729
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600570914,
              "stderr": 4038.1077213805197,
              "tstat": -0.2375578429911568,
              "pvalue": 0.8136497729181524,
              "ci_lower": -9165.706404866138,
              "ci_upper": 7247.138084751954,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192869,
              "stderr": 3661.5627273597242,
              "tstat": 0.19100288718079322,
              "pvalue": 0.8496593413793897,
              "ci_lower": -6741.821695679923,
              "ci_upper": 8140.559800718497,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845174478,
              "residual": 13674.211548255233,
              "abs_error": 13674.211548255233,
              "pct_error": 9.358081758596319
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209675622,
              "residual": 13377.36790324378,
              "abs_error": 13377.36790324378,
              "pct_error": 16.468697167299215
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221055063,
              "residual": 12512.907789449382,
              "abs_error": 12512.907789449382,
              "pct_error": 6.549532711997803
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760815565,
              "residual": 11677.122391844343,
              "abs_error": 11677.122391844343,
              "pct_error": 8.094531373237615
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230165101,
              "residual": -11152.932301651017,
              "abs_error": 11152.932301651017,
              "pct_error": 10.620999711023838
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851257896,
              "residual": 5822.731487421042,
              "abs_error": 5822.731487421042,
              "pct_error": 7.484343257374233
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43533012443,
              "residual": -3617.1853301244264,
              "abs_error": 3617.1853301244264,
              "pct_error": 3.2778537185462246
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656955042,
              "residual": -1733.12569550419,
              "abs_error": 1733.12569550419,
              "pct_error": 1.0428709180125766
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337468745,
              "residual": -1308.1737468744977,
              "abs_error": 1308.1737468744977,
              "pct_error": 1.341942935685256
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.2015979618,
              "residual": 267.1784020382038,
              "abs_error": 267.1784020382038,
              "pct_error": 0.25868730178197263
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822599,
          "mae": 6772.453280477899,
          "r2": 0.9464587607787219,
          "adj_r2": 0.9397661058760621,
          "f_stat": 652.394155235445,
          "f_pvalue": 1.5627804982980067e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.03334204621886622,
              "tstat": 25.54200765866782,
              "pvalue": 1.5627804982979852e-25,
              "ci_lower": 0.7841253560995814,
              "ci_upper": 0.9191202436562932,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756774,
              "residual": 15584.782262432258,
              "abs_error": 15584.782262432258,
              "pct_error": 19.186215207257426
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508352,
              "residual": 11959.80397491649,
              "abs_error": 11959.80397491649,
              "pct_error": 6.2600259412799355
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516923,
              "residual": 10914.149804830784,
              "abs_error": 10914.149804830784,
              "pct_error": 7.469206238235107
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.8341057847,
              "residual": 10108.56589421528,
              "abs_error": 10108.56589421528,
              "pct_error": 7.00721470782166
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855634,
              "residual": 5628.285711443663,
              "abs_error": 5628.285711443663,
              "pct_error": 7.234409195412916
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586336,
              "residual": -4816.463865863363,
              "abs_error": 4816.463865863363,
              "pct_error": 4.586745435540638
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.148435391,
              "residual": -3250.2084353909886,
              "abs_error": 3250.2084353909886,
              "pct_error": 1.9557426582163473
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138655,
              "residual": -2997.872771386552,
              "abs_error": 2997.872771386552,
              "pct_error": 3.075259840106939
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997859,
              "residual": -1384.8980599785864,
              "abs_error": 1384.8980599785864,
              "pct_error": 1.340885115136373
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432103,
              "residual": -1079.502024321031,
              "abs_error": 1079.502024321031,
              "pct_error": 0.9782329080929759
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.797190788488,
          "mae": 6886.594588246509,
          "r2": 0.9474386447268488,
          "adj_r2": 0.9324211146488056,
          "f_stat": 349.041043295694,
          "f_pvalue": 9.649812292514527e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.338761236504,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245256,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.04183443697,
              "ci_upper": 52366.63568803604,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.046813375749335515,
              "tstat": 16.846003675640823,
              "pvalue": 6.12036580385473e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.0989116309034443
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03257662731702046,
              "stderr": 0.01751414004366079,
              "tstat": 1.86001866125374,
              "pvalue": 0.07084678339897671,
              "ci_lower": -0.0029103912358813475,
              "ci_upper": 0.06806364586992228,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312015,
              "residual": 12893.984246879845,
              "abs_error": 12893.984246879845,
              "pct_error": 15.873610068711672
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650103,
              "residual": 11939.800483498984,
              "abs_error": 11939.800483498984,
              "pct_error": 8.171120412435629
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.252997361,
              "residual": 10408.137002639007,
              "abs_error": 10408.137002639007,
              "pct_error": 5.4478491264210485
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.92383811908,
              "residual": 10385.476161880913,
              "abs_error": 10385.476161880913,
              "pct_error": 7.199167722783343
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894303,
              "residual": -9708.939038943034,
              "abs_error": 9708.939038943034,
              "pct_error": 9.245876863405414
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452149,
              "residual": -4228.671364521491,
              "abs_error": 4228.671364521491,
              "pct_error": 3.831975663859587
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498419,
              "residual": -4155.379794984183,
              "abs_error": 4155.379794984183,
              "pct_error": 2.500409954527496
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630343,
              "residual": 4097.723063696569,
              "abs_error": 4097.723063696569,
              "pct_error": 5.2670754350631865
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182887,
              "residual": 997.7339481711388,
              "abs_error": 997.7339481711388,
              "pct_error": 0.9660253260731779
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922275007,
              "residual": 50.1007772499288,
              "abs_error": 50.1007772499288,
              "pct_error": 0.05139407839632529
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration"
          ],
          "rmse": 8803.775790469346,
          "mae": 7320.441614848128,
          "r2": 0.939395591782057,
          "adj_r2": 0.9090933876730856,
          "f_stat": 227.79498982679945,
          "f_pvalue": 1.8474317896878494e-23,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42989.00816508674,
              "stderr": 7919.772517103597,
              "tstat": 5.428060979308102,
              "pvalue": 4.041216456576263e-06,
              "ci_lower": 26926.9650340191,
              "ci_upper": 59051.05129615439,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7788410440821674,
              "stderr": 0.05191103443957787,
              "tstat": 15.003381313633879,
              "pvalue": 4.592578715978826e-17,
              "ci_lower": 0.6735605865505699,
              "ci_upper": 0.8841215016137648,
              "vif": 2.525800946293161
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03471025486941995,
              "stderr": 0.018306482490837016,
              "tstat": 1.8960635876823169,
              "pvalue": 0.06600037194124983,
              "ci_lower": -0.002417012449300253,
              "ci_upper": 0.07183752218814016,
              "vif": 2.244149821335617
            },
            {
              "feature": "Administration",
              "coef": 0.029391899097552077,
              "stderr": 0.06415469322089737,
              "tstat": 0.4581410590858867,
              "pvalue": 0.6496046941992174,
              "ci_lower": -0.10071984935849104,
              "ci_upper": 0.1595036475535952,
              "vif": 1.2117875999957919
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67113.57690570194,
              "residual": 14115.483094298062,
              "abs_error": 14115.483094298062,
              "pct_error": 17.377380821959605
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133567.90370043818,
              "residual": 12554.046299561829,
              "abs_error": 12554.046299561829,
              "pct_error": 8.591485604703351
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132763.05993125628,
              "residual": 11496.34006874371,
              "abs_error": 11496.34006874371,
              "pct_error": 7.9692138389205205
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179627.92567223712,
              "residual": 11422.464327762893,
              "abs_error": 11422.464327762893,
              "pct_error": 5.97877048445852
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 115166.64864795282,
              "residual": -10158.338647952827,
              "abs_error": 10158.338647952827,
              "pct_error": 9.673842620601006
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72911.78976735752,
              "residual": 4887.040232642481,
              "abs_error": 4887.040232642481,
              "pct_error": 6.281637182259015
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114756.1155522112,
              "residual": -4403.865552211195,
              "abs_error": 4403.865552211195,
              "pct_error": 3.990734717426418
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169064.0140879458,
              "residual": -2876.0740879458026,
              "abs_error": 2876.0740879458026,
              "pct_error": 1.730615403227095
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98154.80686776245,
              "residual": -671.2468677624565,
              "abs_error": 671.2468677624565,
              "pct_error": 0.6885744301525883
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103901.89696960003,
              "residual": -619.516969600023,
              "abs_error": 619.516969600023,
              "pct_error": 0.5998283246377775
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_New York"
          ],
          "rmse": 8997.199285980296,
          "mae": 7474.740626347196,
          "r2": 0.9367033175958571,
          "adj_r2": 0.8860659716725429,
          "f_stat": 166.6080061491102,
          "f_pvalue": 2.9014566723283526e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42410.30908342113,
              "stderr": 8223.431866814512,
              "tstat": 5.157251834792607,
              "pvalue": 9.970354548170914e-06,
              "ci_lower": 25715.854853174475,
              "ci_upper": 59104.76331366779,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.774682580549423,
              "stderr": 0.05416600846008523,
              "tstat": 14.302006047211034,
              "pvalue": 3.4750172972231683e-16,
              "ci_lower": 0.6647197373329288,
              "ci_upper": 0.8846454237659171,
              "vif": 2.6813755945236446
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03573424378559614,
              "stderr": 0.018815596804102313,
              "tstat": 1.8991820539970916,
              "pvalue": 0.06580770448112269,
              "ci_lower": -0.0024634484611737797,
              "ci_upper": 0.07393193603236606,
              "vif": 2.311544534234606
            },
            {
              "feature": "Administration",
              "coef": 0.031834868252112125,
              "stderr": 0.0654210790821005,
              "tstat": 0.4866148449211729,
              "pvalue": 0.6295647022032714,
              "ci_lower": -0.10097698306715278,
              "ci_upper": 0.16464671957137703,
              "vif": 1.2286530866987377
            },
            {
              "feature": "State_New York",
              "coef": 1052.2198800537153,
              "stderr": 3301.345841423617,
              "tstat": 0.3187245234507069,
              "pvalue": 0.7518297387033923,
              "ci_lower": -5649.868486516669,
              "ci_upper": 7754.308246624099,
              "vif": 1.0621245394485346
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67853.79186123732,
              "residual": 13375.26813876268,
              "abs_error": 13375.26813876268,
              "pct_error": 16.466112175571997
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 133070.2390635292,
              "residual": 13051.710936470801,
              "abs_error": 13051.710936470801,
              "pct_error": 8.9320673153286
            },
            {
              "rank": 3,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132245.69745454332,
              "residual": 12013.702545456676,
              "abs_error": 12013.702545456676,
              "pct_error": 8.327847298308932
            },
            {
              "rank": 4,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179075.96157197986,
              "residual": 11974.428428020154,
              "abs_error": 11974.428428020154,
              "pct_error": 6.267680703515001
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116014.33808117366,
              "residual": -11006.02808117366,
              "abs_error": 11006.02808117366,
              "pct_error": 10.48110200152127
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72592.46097857333,
              "residual": 5206.369021426668,
              "abs_error": 5206.369021426668,
              "pct_error": 6.692091669536248
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114480.2628233497,
              "residual": -4128.012823349694,
              "abs_error": 4128.012823349694,
              "pct_error": 3.7407599966015144
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 168492.58649269515,
              "residual": -2304.646492695145,
              "abs_error": 2304.646492695145,
              "pct_error": 1.3867712017461344
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98837.47482909175,
              "residual": -1353.914829091751,
              "abs_error": 1353.914829091751,
              "pct_error": 1.3888647779089633
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103615.70496702474,
              "residual": -333.32496702473145,
              "abs_error": 333.32496702473145,
              "pct_error": 0.32273168668724656
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Marketing Spend",
            "Administration",
            "State_New York",
            "State_Florida"
          ],
          "rmse": 9137.990152794951,
          "mae": 7514.293659640607,
          "r2": 0.9347068473282424,
          "adj_r2": 0.8530904064885454,
          "f_stat": 129.70441863373293,
          "f_pvalue": 3.907703841869268e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773246,
              "stderr": 8358.538206708878,
              "tstat": 5.091101645450024,
              "pvalue": 1.3086760335434663e-05,
              "ci_lower": 25567.574241225975,
              "ci_upper": 59540.76099423895,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722886,
              "stderr": 0.05514906906550923,
              "tstat": 14.0250271832063,
              "pvalue": 1.068697847016787e-15,
              "ci_lower": 0.6613907999699238,
              "ci_upper": 0.8855435855746534,
              "vif": 2.704652545511513
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585430018,
              "stderr": 0.01942746493319194,
              "tstat": 1.8844468889891923,
              "pvalue": 0.06807739023831193,
              "ci_lower": -0.00287133308614166,
              "ci_upper": 0.076091384794742,
              "vif": 2.397892228295729
            },
            {
              "feature": "Administration",
              "coef": 0.032884597528036075,
              "stderr": 0.066468209997175,
              "tstat": 0.49474173487496836,
              "pvalue": 0.6239644296767612,
              "ci_lower": -0.1021950572828999,
              "ci_upper": 0.16796425233897205,
              "vif": 1.2341074098600409
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192687,
              "stderr": 3661.5627273597233,
              "tstat": 0.19100288718078828,
              "pvalue": 0.8496593413793936,
              "ci_lower": -6741.82169567994,
              "ci_upper": 8140.559800718477,
              "vif": 1.271327610744667
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600571442,
              "stderr": 4038.1077213805193,
              "tstat": -0.2375578429911699,
              "pvalue": 0.8136497729181424,
              "ci_lower": -9165.706404866189,
              "ci_upper": 7247.138084751899,
              "vif": 1.2743836566980131
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845174478,
              "residual": 13674.211548255233,
              "abs_error": 13674.211548255233,
              "pct_error": 9.358081758596319
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209675625,
              "residual": 13377.36790324375,
              "abs_error": 13377.36790324375,
              "pct_error": 16.46869716729918
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221055063,
              "residual": 12512.907789449382,
              "abs_error": 12512.907789449382,
              "pct_error": 6.549532711997803
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760815562,
              "residual": 11677.122391844372,
              "abs_error": 11677.122391844372,
              "pct_error": 8.094531373237634
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.242301651,
              "residual": -11152.932301651002,
              "abs_error": 11152.932301651002,
              "pct_error": 10.620999711023824
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851257897,
              "residual": 5822.731487421028,
              "abs_error": 5822.731487421028,
              "pct_error": 7.484343257374215
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43533012441,
              "residual": -3617.185330124412,
              "abs_error": 3617.185330124412,
              "pct_error": 3.2778537185462113
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656955042,
              "residual": -1733.12569550419,
              "abs_error": 1733.12569550419,
              "pct_error": 1.0428709180125766
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337468745,
              "residual": -1308.1737468744977,
              "abs_error": 1308.1737468744977,
              "pct_error": 1.341942935685256
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.2015979618,
              "residual": 267.1784020382038,
              "abs_error": 267.1784020382038,
              "pct_error": 0.25868730178197263
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "features": [
            "R&D Spend"
          ],
          "rmse": 8274.86801822599,
          "mae": 6772.453280477899,
          "r2": 0.9464587607787219,
          "adj_r2": 0.9397661058760621,
          "f_stat": 652.394155235445,
          "f_pvalue": 1.5627804982980067e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48416.29766138503,
              "stderr": 2842.7166679428,
              "tstat": 17.031700066128167,
              "pvalue": 2.2223577366899645e-19,
              "ci_lower": 42661.51862914635,
              "ci_upper": 54171.07669362372,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8516227998779373,
              "stderr": 0.03334204621886622,
              "tstat": 25.54200765866782,
              "pvalue": 1.5627804982979852e-25,
              "ci_lower": 0.7841253560995814,
              "ci_upper": 0.9191202436562932,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65644.27773756774,
              "residual": 15584.782262432258,
              "abs_error": 15584.782262432258,
              "pct_error": 19.186215207257426
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179090.58602508352,
              "residual": 11959.80397491649,
              "abs_error": 11959.80397491649,
              "pct_error": 6.2600259412799355
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135207.80019516923,
              "residual": 10914.149804830784,
              "abs_error": 10914.149804830784,
              "pct_error": 7.469206238235107
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134150.8341057847,
              "residual": 10108.56589421528,
              "abs_error": 10108.56589421528,
              "pct_error": 7.00721470782166
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72170.54428855634,
              "residual": 5628.285711443663,
              "abs_error": 5628.285711443663,
              "pct_error": 7.234409195412916
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109824.77386586336,
              "residual": -4816.463865863363,
              "abs_error": 4816.463865863363,
              "pct_error": 4.586745435540638
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169438.148435391,
              "residual": -3250.2084353909886,
              "abs_error": 3250.2084353909886,
              "pct_error": 1.9557426582163473
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100481.43277138655,
              "residual": -2997.872771386552,
              "abs_error": 2997.872771386552,
              "pct_error": 3.075259840106939
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104667.27805997859,
              "residual": -1384.8980599785864,
              "abs_error": 1384.8980599785864,
              "pct_error": 1.340885115136373
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111431.75202432103,
              "residual": -1079.502024321031,
              "abs_error": 1079.502024321031,
              "pct_error": 0.9782329080929759
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "R&D Spend",
            "Marketing Spend"
          ],
          "rmse": 8198.797190788488,
          "mae": 6886.594588246509,
          "r2": 0.9474386447268488,
          "adj_r2": 0.9324211146488056,
          "f_stat": 349.041043295694,
          "f_pvalue": 9.649812292514527e-25,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 46346.338761236504,
              "stderr": 2971.2364627984716,
              "tstat": 15.598334007245256,
              "pvalue": 7.489298476788189e-18,
              "ci_lower": 40326.04183443697,
              "ci_upper": 52366.63568803604,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.788618299942461,
              "stderr": 0.046813375749335515,
              "tstat": 16.846003675640823,
              "pvalue": 6.12036580385473e-19,
              "ci_lower": 0.6937653908302077,
              "ci_upper": 0.8834712090547143,
              "vif": 2.0989116309034443
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03257662731702046,
              "stderr": 0.01751414004366079,
              "tstat": 1.86001866125374,
              "pvalue": 0.07084678339897671,
              "ci_lower": -0.0029103912358813475,
              "ci_upper": 0.06806364586992228,
              "vif": 2.0989116309034443
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 68335.07575312015,
              "residual": 12893.984246879845,
              "abs_error": 12893.984246879845,
              "pct_error": 15.873610068711672
            },
            {
              "rank": 2,
              "index": 10,
              "actual": 146121.95,
              "predicted": 134182.14951650103,
              "residual": 11939.800483498984,
              "abs_error": 11939.800483498984,
              "pct_error": 8.171120412435629
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 180642.252997361,
              "residual": 10408.137002639007,
              "abs_error": 10408.137002639007,
              "pct_error": 5.4478491264210485
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 133873.92383811908,
              "residual": 10385.476161880913,
              "abs_error": 10385.476161880913,
              "pct_error": 7.199167722783343
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 114717.24903894303,
              "residual": -9708.939038943034,
              "abs_error": 9708.939038943034,
              "pct_error": 9.245876863405414
            },
            {
              "rank": 6,
              "index": 22,
              "actual": 110352.25,
              "predicted": 114580.92136452149,
              "residual": -4228.671364521491,
              "abs_error": 4228.671364521491,
              "pct_error": 3.831975663859587
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 170343.31979498419,
              "residual": -4155.379794984183,
              "abs_error": 4155.379794984183,
              "pct_error": 2.500409954527496
            },
            {
              "rank": 8,
              "index": 41,
              "actual": 77798.83,
              "predicted": 73701.10693630343,
              "residual": 4097.723063696569,
              "abs_error": 4097.723063696569,
              "pct_error": 5.2670754350631865
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 102284.64605182887,
              "residual": 997.7339481711388,
              "abs_error": 997.7339481711388,
              "pct_error": 0.9660253260731779
            },
            {
              "rank": 10,
              "index": 31,
              "actual": 97483.56,
              "predicted": 97433.45922275007,
              "residual": 50.1007772499288,
              "abs_error": 50.1007772499288,
              "pct_error": 0.05139407839632529
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "R&D Spend",
            "Administration",
            "State_Florida"
          ],
          "rmse": 8171.645989404477,
          "mae": 6730.785004118914,
          "r2": 0.9477861934963948,
          "adj_r2": 0.9216792902445923,
          "f_stat": 206.09655529816675,
          "f_pvalue": 1.0160938908645174e-22,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48524.91882908611,
              "stderr": 7726.06384019263,
              "tstat": 6.280677953584741,
              "pvalue": 2.934874827709834e-07,
              "ci_lower": 32855.73510359946,
              "ci_upper": 64194.10255457277,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.8519395749717549,
              "stderr": 0.036462342632611326,
              "tstat": 23.364916060269643,
              "pvalue": 2.3977565690535485e-23,
              "ci_lower": 0.7779905166168621,
              "ci_upper": 0.9258886333266476,
              "vif": 1.133385343031554
            },
            {
              "feature": "Administration",
              "coef": -0.0018828428106338335,
              "stderr": 0.06512547204443572,
              "tstat": -0.028911004427716887,
              "pvalue": 0.9770952519916829,
              "ci_lower": -0.13396342197497393,
              "ci_upper": 0.13019773635370627,
              "vif": 1.1357431042585073
            },
            {
              "feature": "State_Florida",
              "coef": 404.0171892528451,
              "stderr": 3657.528521478564,
              "tstat": 0.11046180142691554,
              "pvalue": 0.9126566675844339,
              "ci_lower": -7013.794463572726,
              "ci_upper": 7821.8288420784165,
              "vif": 1.0022433489292677
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65635.13754987689,
              "residual": 15593.922450123107,
              "abs_error": 15593.922450123107,
              "pct_error": 19.197467569024077
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179461.38965823385,
              "residual": 11589.000341766165,
              "abs_error": 11589.000341766165,
              "pct_error": 6.065939117824446
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135544.49075237667,
              "residual": 10577.459247623337,
              "abs_error": 10577.459247623337,
              "pct_error": 7.238788729293126
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134118.51835251757,
              "residual": 10140.881647482427,
              "abs_error": 10140.881647482427,
              "pct_error": 7.02961584997749
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72532.52136384,
              "residual": 5266.30863616,
              "abs_error": 5266.30863616,
              "pct_error": 6.769136034770702
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109715.48807670968,
              "residual": -4707.178076709679,
              "abs_error": 4707.178076709679,
              "pct_error": 4.482671968256302
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169823.72652037634,
              "residual": -3635.786520376336,
              "abs_error": 3635.786520376336,
              "pct_error": 2.187755934862864
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100321.90670971508,
              "residual": -2838.346709715086,
              "abs_error": 2838.346709715086,
              "pct_error": 2.9116157736905444
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104856.9470143377,
              "residual": -1574.567014337692,
              "abs_error": 1574.567014337692,
              "pct_error": 1.52452626898963
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111736.64939689531,
              "residual": -1384.3993968953146,
              "abs_error": 1384.3993968953146,
              "pct_error": 1.2545275668555145
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "R&D Spend",
            "Administration",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 8178.369214854918,
          "mae": 6751.89033650961,
          "r2": 0.9477002402858664,
          "adj_r2": 0.9058604325145595,
          "f_stat": 150.28826894740232,
          "f_pvalue": 1.5952252772818217e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 48444.52707098957,
              "stderr": 8029.630615580647,
              "tstat": 6.033219881495931,
              "pvalue": 6.981305051177212e-07,
              "ci_lower": 32143.510297377616,
              "ci_upper": 64745.543844601525,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.851613579251783,
              "stderr": 0.0376572840670068,
              "tstat": 22.61484332583398,
              "pvalue": 1.7976256516593397e-22,
              "ci_lower": 0.7751652283109772,
              "ci_upper": 0.9280619301925889,
              "vif": 1.1753792401120298
            },
            {
              "feature": "Administration",
              "coef": -0.0016967977561576086,
              "stderr": 0.06617210717721557,
              "tstat": -0.025642190169543996,
              "pvalue": 0.9796883807898525,
              "ci_lower": -0.13603331716565437,
              "ci_upper": 0.13263972165333915,
              "vif": 1.1400393441883754
            },
            {
              "feature": "State_Florida",
              "coef": 484.7329661977474,
              "stderr": 4106.688327934862,
              "tstat": 0.11803500229137329,
              "pvalue": 0.9067147364414865,
              "ci_lower": -7852.287567195961,
              "ci_upper": 8821.753499591456,
              "vif": 1.2284933165040066
            },
            {
              "feature": "State_New York",
              "coef": 173.1954284640633,
              "stderr": 3781.6175138288772,
              "tstat": 0.04579929827136415,
              "pvalue": 0.9637305421972064,
              "ci_lower": -7503.896267970291,
              "ci_upper": 7850.2871248984175,
              "vif": 1.2639347101595257
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 38,
              "actual": 81229.06,
              "predicted": 65733.61574674616,
              "residual": 15495.444253253838,
              "abs_error": 15495.444253253838,
              "pct_error": 19.076232389312196
            },
            {
              "rank": 2,
              "index": 2,
              "actual": 191050.39,
              "predicted": 179430.5100307811,
              "residual": 11619.87996921892,
              "abs_error": 11619.87996921892,
              "pct_error": 6.082102197864615
            },
            {
              "rank": 3,
              "index": 10,
              "actual": 146121.95,
              "predicted": 135532.16703050752,
              "residual": 10589.782969492488,
              "abs_error": 10589.782969492488,
              "pct_error": 7.247222590098536
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 134022.38515531243,
              "residual": 10237.014844687568,
              "abs_error": 10237.014844687568,
              "pct_error": 7.096254971729793
            },
            {
              "rank": 5,
              "index": 41,
              "actual": 77798.83,
              "predicted": 72539.51243000686,
              "residual": 5259.317569993145,
              "abs_error": 5259.317569993145,
              "pct_error": 6.760149953403085
            },
            {
              "rank": 6,
              "index": 27,
              "actual": 105008.31,
              "predicted": 109808.57354528425,
              "residual": -4800.263545284251,
              "abs_error": 4800.263545284251,
              "pct_error": 4.571317779787383
            },
            {
              "rank": 7,
              "index": 4,
              "actual": 166187.94,
              "predicted": 169794.72714130863,
              "residual": -3606.787141308625,
              "abs_error": 3606.787141308625,
              "pct_error": 2.170306185460043
            },
            {
              "rank": 8,
              "index": 31,
              "actual": 97483.56,
              "predicted": 100423.18961894886,
              "residual": -2939.629618948864,
              "abs_error": 2939.629618948864,
              "pct_error": 3.0155131993013633
            },
            {
              "rank": 9,
              "index": 28,
              "actual": 103282.38,
              "predicted": 104869.71882360728,
              "residual": -1587.3388236072788,
              "abs_error": 1587.3388236072788,
              "pct_error": 1.5368921820036279
            },
            {
              "rank": 10,
              "index": 22,
              "actual": 110352.25,
              "predicted": 111735.69462930113,
              "residual": -1383.4446293011279,
              "abs_error": 1383.4446293011279,
              "pct_error": 1.2536623669214972
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "R&D Spend",
            "Administration",
            "Marketing Spend",
            "State_Florida",
            "State_New York"
          ],
          "rmse": 9137.990152794957,
          "mae": 7514.293659640612,
          "r2": 0.9347068473282423,
          "adj_r2": 0.8530904064885452,
          "f_stat": 129.70441863373287,
          "f_pvalue": 3.9077038418693004e-21,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 42554.16761773242,
              "stderr": 8358.538206708883,
              "tstat": 5.091101645450016,
              "pvalue": 1.308676033543497e-05,
              "ci_lower": 25567.57424122592,
              "ci_upper": 59540.76099423892,
              "vif": null
            },
            {
              "feature": "R&D Spend",
              "coef": 0.7734671927722886,
              "stderr": 0.055149069065509274,
              "tstat": 14.025027183206289,
              "pvalue": 1.0686978470168071e-15,
              "ci_lower": 0.6613907999699238,
              "ci_upper": 0.8855435855746534,
              "vif": 2.704652545511513
            },
            {
              "feature": "Administration",
              "coef": 0.03288459752803641,
              "stderr": 0.06646820999717504,
              "tstat": 0.4947417348749731,
              "pvalue": 0.6239644296767579,
              "ci_lower": -0.10219505728289965,
              "ci_upper": 0.16796425233897247,
              "vif": 1.2341074098600409
            },
            {
              "feature": "Marketing Spend",
              "coef": 0.03661002585429951,
              "stderr": 0.019427464933191935,
              "tstat": 1.8844468889891584,
              "pvalue": 0.06807739023831669,
              "ci_lower": -0.002871333086142319,
              "ci_upper": 0.07609138479474134,
              "vif": 2.397892228295729
            },
            {
              "feature": "State_Florida",
              "coef": -959.2841600570914,
              "stderr": 4038.1077213805197,
              "tstat": -0.2375578429911568,
              "pvalue": 0.8136497729181524,
              "ci_lower": -9165.706404866138,
              "ci_upper": 7247.138084751954,
              "vif": 1.2743836566980133
            },
            {
              "feature": "State_New York",
              "coef": 699.3690525192869,
              "stderr": 3661.5627273597242,
              "tstat": 0.19100288718079322,
              "pvalue": 0.8496593413793897,
              "ci_lower": -6741.821695679923,
              "ci_upper": 8140.559800718497,
              "vif": 1.271327610744667
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 10,
              "actual": 146121.95,
              "predicted": 132447.73845174478,
              "residual": 13674.211548255233,
              "abs_error": 13674.211548255233,
              "pct_error": 9.358081758596319
            },
            {
              "rank": 2,
              "index": 38,
              "actual": 81229.06,
              "predicted": 67851.69209675622,
              "residual": 13377.36790324378,
              "abs_error": 13377.36790324378,
              "pct_error": 16.468697167299215
            },
            {
              "rank": 3,
              "index": 2,
              "actual": 191050.39,
              "predicted": 178537.48221055063,
              "residual": 12512.907789449382,
              "abs_error": 12512.907789449382,
              "pct_error": 6.549532711997803
            },
            {
              "rank": 4,
              "index": 11,
              "actual": 144259.4,
              "predicted": 132582.27760815565,
              "residual": 11677.122391844343,
              "abs_error": 11677.122391844343,
              "pct_error": 8.094531373237615
            },
            {
              "rank": 5,
              "index": 27,
              "actual": 105008.31,
              "predicted": 116161.24230165101,
              "residual": -11152.932301651017,
              "abs_error": 11152.932301651017,
              "pct_error": 10.620999711023838
            },
            {
              "rank": 6,
              "index": 41,
              "actual": 77798.83,
              "predicted": 71976.09851257896,
              "residual": 5822.731487421042,
              "abs_error": 5822.731487421042,
              "pct_error": 7.484343257374233
            },
            {
              "rank": 7,
              "index": 22,
              "actual": 110352.25,
              "predicted": 113969.43533012443,
              "residual": -3617.1853301244264,
              "abs_error": 3617.1853301244264,
              "pct_error": 3.2778537185462246
            },
            {
              "rank": 8,
              "index": 4,
              "actual": 166187.94,
              "predicted": 167921.0656955042,
              "residual": -1733.12569550419,
              "abs_error": 1733.12569550419,
              "pct_error": 1.0428709180125766
            },
            {
              "rank": 9,
              "index": 31,
              "actual": 97483.56,
              "predicted": 98791.7337468745,
              "residual": -1308.1737468744977,
              "abs_error": 1308.1737468744977,
              "pct_error": 1.341942935685256
            },
            {
              "rank": 10,
              "index": 28,
              "actual": 103282.38,
              "predicted": 103015.2015979618,
              "residual": 267.1784020382038,
              "abs_error": 267.1784020382038,
              "pct_error": 0.25868730178197263
            }
          ]
        }
      ]
    }
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
      "LSTAT": {
        "name": "% Lower Status of Population",
        "min": 1,
        "max": 40,
        "default": 12.5,
        "step": 0.5,
        "unit": "%"
      },
      "RM": {
        "name": "Avg Rooms per Dwelling",
        "min": 3,
        "max": 9,
        "default": 6.2,
        "step": 0.1,
        "unit": "rooms"
      },
      "PTRATIO": {
        "name": "Pupil-Teacher Ratio",
        "min": 12,
        "max": 23,
        "default": 18.5,
        "step": 0.5,
        "unit": ":1"
      },
      "DIS": {
        "name": "Distance to Employment Centers",
        "min": 1,
        "max": 13,
        "default": 3.8,
        "step": 0.2,
        "unit": "miles"
      },
      "NOX": {
        "name": "Nitric Oxides Concentration",
        "min": 0.35,
        "max": 0.9,
        "default": 0.55,
        "step": 0.01,
        "unit": "ppm"
      }
    },
    "models": {
      "Lasso": [
        {
          "k": 1,
          "features": [
            "LSTAT"
          ],
          "rmse": 5.789606996393182,
          "mae": 4.184807930623362,
          "r2": 0.5429180422970384,
          "adj_r2": 0.5383472227200088,
          "f_stat": 476.3392498280435,
          "f_pvalue": 3.197743945413642e-70,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.836949820318516,
              "stderr": 0.6350210267842643,
              "tstat": 54.8595217338428,
              "pvalue": 8.960598634732442e-189,
              "ci_lower": 33.58857299395971,
              "ci_upper": 36.08532664667732,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.9665309019503523,
              "stderr": 0.044285092860186163,
              "tstat": -21.82519758966786,
              "pvalue": 3.197743945413486e-70,
              "ci_lower": -1.053590198175178,
              "ci_upper": -0.8794716057255265,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.625910324731645,
              "residual": 24.374089675268355,
              "abs_error": 24.374089675268355,
              "pct_error": 48.74817935053671
            },
            {
              "rank": 2,
              "index": 195,
              "actual": 50.0,
              "predicted": 31.96635304152596,
              "residual": 18.03364695847404,
              "abs_error": 18.03364695847404,
              "pct_error": 36.06729391694808
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 32.05334082270149,
              "residual": 17.946659177298507,
              "abs_error": 17.946659177298507,
              "pct_error": 35.893318354597014
            },
            {
              "rank": 4,
              "index": 203,
              "actual": 48.5,
              "predicted": 31.154467083887663,
              "residual": 17.345532916112337,
              "abs_error": 17.345532916112337,
              "pct_error": 35.76398539404605
            },
            {
              "rank": 5,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.6172827202848765,
              "residual": 16.282717279715122,
              "abs_error": 16.282717279715122,
              "pct_error": 90.9649010039951
            },
            {
              "rank": 6,
              "index": 268,
              "actual": 43.5,
              "predicted": 31.782712170155392,
              "residual": 11.717287829844608,
              "abs_error": 11.717287829844608,
              "pct_error": 26.93629386171174
            },
            {
              "rank": 7,
              "index": 355,
              "actual": 20.6,
              "predicted": 29.45337269645504,
              "residual": -8.85337269645504,
              "abs_error": 8.85337269645504,
              "pct_error": 42.977537361432226
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.9053629338055416,
              "residual": 7.905362933805542,
              "abs_error": 7.905362933805542,
              "pct_error": 112.93375619722201
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.320534008829192,
              "residual": 7.879465991170807,
              "abs_error": 7.879465991170807,
              "pct_error": 45.81084878587679
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.39106704011464,
              "residual": -7.791067040114639,
              "abs_error": 7.791067040114639,
              "pct_error": 81.15694833452748
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "LSTAT",
            "RM"
          ],
          "rmse": 5.589569804715174,
          "mae": 3.898759721382357,
          "r2": 0.5739577415025859,
          "adj_r2": 0.5653508271895069,
          "f_stat": 372.61794090137715,
          "f_pvalue": 3.515683819273297e-92,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3.841177079004873,
              "stderr": 3.5229849736558925,
              "tstat": -1.0903188937018895,
              "pvalue": 0.2762274312067459,
              "ci_lower": -10.767004309133625,
              "ci_upper": 3.0846501511238786,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.632498562707589,
              "stderr": 0.04904544343244711,
              "tstat": -12.896173802134399,
              "pvalue": 4.500238085886292e-32,
              "ci_lower": -0.7289168756377422,
              "ci_upper": -0.5360802497774357,
              "vif": 1.600640940207779
            },
            {
              "feature": "RM",
              "coef": 5.465098773075864,
              "stderr": 0.4915510985577746,
              "tstat": 11.118068475710103,
              "pvalue": 3.2623714142966794e-25,
              "ci_lower": 4.498759714337755,
              "ci_upper": 6.431437831813973,
              "vif": 1.6006409402077786
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.102165591831383,
              "residual": 25.897834408168617,
              "abs_error": 25.897834408168617,
              "pct_error": 51.79566881633724
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.2876755574695742,
              "residual": 18.18767555746957,
              "abs_error": 18.18767555746957,
              "pct_error": 101.60712601938309
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 11.11664988544025,
              "residual": 16.38335011455975,
              "abs_error": 16.38335011455975,
              "pct_error": 59.57581859839909
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 37.317955027726015,
              "residual": 12.682044972273985,
              "abs_error": 12.682044972273985,
              "pct_error": 25.364089944547967
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 27.62430956570893,
              "residual": -12.62430956570893,
              "abs_error": 12.62430956570893,
              "pct_error": 84.16206377139287
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.66642406204397,
              "residual": 11.833575937956027,
              "abs_error": 11.833575937956027,
              "pct_error": 24.39912564527016
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.243830603288764,
              "residual": 11.756169396711236,
              "abs_error": 11.756169396711236,
              "pct_error": 23.512338793422472
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.05222703696632,
              "residual": -10.452227036966319,
              "abs_error": 10.452227036966319,
              "pct_error": 108.87736496839915
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.534192572401648,
              "residual": 9.534192572401647,
              "abs_error": 9.534192572401647,
              "pct_error": 136.20275103430924
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.759918951394335,
              "residual": 9.240081048605665,
              "abs_error": 9.240081048605665,
              "pct_error": 46.20040524302833
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "LSTAT",
            "RM",
            "DIS"
          ],
          "rmse": 5.59161309309234,
          "mae": 3.9077816817597117,
          "r2": 0.573646201853689,
          "adj_r2": 0.560594554971659,
          "f_stat": 258.98286232948635,
          "f_pvalue": 2.3694930004600715e-93,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 0.8578000158653802,
              "stderr": 3.737324917723032,
              "tstat": 0.2295224618543457,
              "pvalue": 0.8185801815206396,
              "ci_lower": -6.489453170545365,
              "ci_upper": 8.205053202276126,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.7237598855816978,
              "stderr": 0.05524339585820846,
              "tstat": -13.101292459271516,
              "pvalue": 7.019302317825738e-33,
              "ci_lower": -0.8323635593812612,
              "ci_upper": -0.6151562117821344,
              "vif": 2.0851668725608867
            },
            {
              "feature": "RM",
              "coef": 5.20823012429305,
              "stderr": 0.49085165433716127,
              "tstat": 10.61059910519435,
              "pvalue": 2.425914266989586e-23,
              "ci_lower": 4.243258798337023,
              "ci_upper": 6.173201450249077,
              "vif": 1.6388552216311458
            },
            {
              "feature": "DIS",
              "coef": -0.509361596161198,
              "stderr": 0.14863049009784507,
              "tstat": -3.4270330120413366,
              "pvalue": 0.0006734911290612348,
              "ci_lower": -0.8015561112247961,
              "ci_upper": -0.21716708109759997,
              "vif": 1.356030132827216
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.739232116805336,
              "residual": 24.260767883194664,
              "abs_error": 24.260767883194664,
              "pct_error": 48.52153576638933
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.7056352206242498,
              "residual": 18.605635220624247,
              "abs_error": 18.605635220624247,
              "pct_error": 103.94209620460475
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 13.429434976203982,
              "residual": 14.070565023796018,
              "abs_error": 14.070565023796018,
              "pct_error": 51.16569099562188
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 28.547781383575447,
              "residual": -13.547781383575447,
              "abs_error": 13.547781383575447,
              "pct_error": 90.31854255716965
            },
            {
              "rank": 5,
              "index": 195,
              "actual": 50.0,
              "predicted": 36.8459673447386,
              "residual": 13.154032655261403,
              "abs_error": 13.154032655261403,
              "pct_error": 26.308065310522803
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.39359336871941,
              "residual": 12.106406631280592,
              "abs_error": 12.106406631280592,
              "pct_error": 24.96166315727957
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.00937971480745,
              "residual": 11.990620285192549,
              "abs_error": 11.990620285192549,
              "pct_error": 23.981240570385097
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.424261381700706,
              "residual": -10.824261381700707,
              "abs_error": 10.824261381700707,
              "pct_error": 112.75272272604904
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -3.2154720200200364,
              "residual": 10.215472020020037,
              "abs_error": 10.215472020020037,
              "pct_error": 145.93531457171483
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.00518985688137,
              "residual": 9.99481014311863,
              "abs_error": 9.99481014311863,
              "pct_error": 49.974050715593144
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "LSTAT",
            "RM",
            "DIS",
            "RAD"
          ],
          "rmse": 5.69289813686203,
          "mae": 3.896126238181845,
          "r2": 0.5580605854489447,
          "adj_r2": 0.539836279694262,
          "f_stat": 206.8853800040904,
          "f_pvalue": 6.827284503188031e-96,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 0.9772755497634664,
              "stderr": 3.661098618731059,
              "tstat": 0.26693505188947664,
              "pvalue": 0.7896570757766126,
              "ci_lower": -6.220178157858159,
              "ci_upper": 8.174729257385092,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.6496874027519464,
              "stderr": 0.05688352844137927,
              "tstat": -11.421362572848746,
              "pvalue": 2.4748161299705953e-26,
              "ci_lower": -0.7615162840031456,
              "ci_upper": -0.5378585215007471,
              "vif": 2.3039757284590414
            },
            {
              "feature": "RM",
              "coef": 5.398153126334472,
              "stderr": 0.48292215212208034,
              "tstat": 11.178102107376192,
              "pvalue": 2.0176230028873162e-25,
              "ci_lower": 4.448763285672818,
              "ci_upper": 6.3475429669961265,
              "vif": 1.6531759864611468
            },
            {
              "feature": "DIS",
              "coef": -0.7084632861292344,
              "stderr": 0.1530295190210264,
              "tstat": -4.629585786203058,
              "pvalue": 4.9638314697437995e-06,
              "ci_lower": -1.0093081946543139,
              "ci_upper": -0.40761837760415476,
              "vif": 1.4980582802643605
            },
            {
              "feature": "RAD",
              "coef": -0.15855796700020214,
              "stderr": 0.037524178404672995,
              "tstat": -4.225488038412493,
              "pvalue": 2.957415579378199e-05,
              "ci_lower": -0.23232777358295367,
              "ci_upper": -0.0847881604174506,
              "vif": 1.4631862317017048
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 23.7070187990141,
              "residual": 26.2929812009859,
              "abs_error": 26.2929812009859,
              "pct_error": 52.5859624019718
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -1.2761001224660107,
              "residual": 19.17610012246601,
              "abs_error": 19.17610012246601,
              "pct_error": 107.12905096349728
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 10.626040343858326,
              "residual": 16.873959656141672,
              "abs_error": 16.873959656141672,
              "pct_error": 61.35985329506063
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 36.9222439401009,
              "residual": 13.077756059899102,
              "abs_error": 13.077756059899102,
              "pct_error": 26.155512119798203
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.984229238124644,
              "residual": -11.984229238124644,
              "abs_error": 11.984229238124644,
              "pct_error": 79.89486158749763
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.63351607997285,
              "residual": 11.86648392002715,
              "abs_error": 11.86648392002715,
              "pct_error": 24.466977154695154
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.21479108039871,
              "residual": 11.785208919601288,
              "abs_error": 11.785208919601288,
              "pct_error": 23.570417839202577
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -3.634075655162337,
              "residual": 10.634075655162338,
              "abs_error": 10.634075655162338,
              "pct_error": 151.9153665023191
            },
            {
              "rank": 9,
              "index": 436,
              "actual": 9.6,
              "predicted": 18.9037254945307,
              "residual": -9.3037254945307,
              "abs_error": 9.3037254945307,
              "pct_error": 96.9138072346948
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.44419662560073,
              "residual": 8.55580337439927,
              "abs_error": 8.55580337439927,
              "pct_error": 42.77901687199635
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "LSTAT",
            "RM",
            "DIS",
            "RAD",
            "PTRATIO"
          ],
          "rmse": 5.248519448289317,
          "mae": 3.35890484422523,
          "r2": 0.6243619896324208,
          "adj_r2": 0.6047975099257761,
          "f_stat": 187.26393938038046,
          "f_pvalue": 3.542939715625337e-102,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 18.90082390795957,
              "stderr": 4.6075645136287955,
              "tstat": 4.102128977695807,
              "pvalue": 4.9665708101200986e-05,
              "ci_lower": 9.842617820165602,
              "ci_upper": 27.95902999575354,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.64384807834582,
              "stderr": 0.054546479627763295,
              "tstat": -11.803659608091584,
              "pvalue": 8.935456903191012e-28,
              "ci_lower": -0.7510833112699491,
              "ci_upper": -0.536612845421691,
              "vif": 2.3047081695049845
            },
            {
              "feature": "RM",
              "coef": 4.751218854532471,
              "stderr": 0.47537595068326133,
              "tstat": 9.994655488363493,
              "pvalue": 3.916891881899898e-21,
              "ci_lower": 3.8166571532837934,
              "ci_upper": 5.6857805557811485,
              "vif": 1.7426769630068129
            },
            {
              "feature": "DIS",
              "coef": -0.6613037040089962,
              "stderr": 0.14692903960411755,
              "tstat": -4.500837314330773,
              "pvalue": 8.899689682441378e-06,
              "ci_lower": -0.9501577215879159,
              "ci_upper": -0.3724496864300765,
              "vif": 1.5023502910249638
            },
            {
              "feature": "RAD",
              "coef": -0.06584579522745282,
              "stderr": 0.03914961025849326,
              "tstat": -1.6819016790382475,
              "pvalue": 0.09337229547352988,
              "ci_lower": -0.14281167100180014,
              "ci_upper": 0.011120080546894492,
              "vif": 1.7326456410640996
            },
            {
              "feature": "PTRATIO",
              "coef": -0.8165255009733944,
              "stderr": 0.13597286324657415,
              "tstat": -6.005062197540853,
              "pvalue": 4.314225788298127e-09,
              "ci_lower": -1.0838403077420713,
              "ci_upper": -0.5492106942047174,
              "vif": 1.4070347179140978
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 23.451283755619393,
              "residual": 26.548716244380607,
              "abs_error": 26.548716244380607,
              "pct_error": 53.09743248876121
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.3413077167910217,
              "residual": 18.24130771679102,
              "abs_error": 18.24130771679102,
              "pct_error": 101.9067470211789
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 12.094786590698707,
              "residual": 15.405213409301293,
              "abs_error": 15.405213409301293,
              "pct_error": 56.018957852004704
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 38.647785358064596,
              "residual": 11.352214641935404,
              "abs_error": 11.352214641935404,
              "pct_error": 22.70442928387081
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.048580947479234,
              "residual": -11.048580947479234,
              "abs_error": 11.048580947479234,
              "pct_error": 73.65720631652822
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.566973317300736,
              "residual": 10.433026682699264,
              "abs_error": 10.433026682699264,
              "pct_error": 20.86605336539853
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.10822399176874,
              "residual": 10.391776008231261,
              "abs_error": 10.391776008231261,
              "pct_error": 21.426342285012907
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.6086080327457957,
              "residual": 9.608608032745796,
              "abs_error": 9.608608032745796,
              "pct_error": 137.26582903922565
            },
            {
              "rank": 9,
              "index": 436,
              "actual": 9.6,
              "predicted": 18.57855011018196,
              "residual": -8.978550110181962,
              "abs_error": 8.978550110181962,
              "pct_error": 93.52656364772876
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.41157598552629,
              "residual": 8.58842401447371,
              "abs_error": 8.58842401447371,
              "pct_error": 42.942120072368546
            }
          ]
        }
      ],
      "Forward SFS": [
        {
          "k": 1,
          "features": [
            "LSTAT"
          ],
          "rmse": 5.789606996393182,
          "mae": 4.184807930623362,
          "r2": 0.5429180422970384,
          "adj_r2": 0.5383472227200088,
          "f_stat": 476.3392498280435,
          "f_pvalue": 3.197743945413642e-70,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.836949820318516,
              "stderr": 0.6350210267842643,
              "tstat": 54.8595217338428,
              "pvalue": 8.960598634732442e-189,
              "ci_lower": 33.58857299395971,
              "ci_upper": 36.08532664667732,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.9665309019503523,
              "stderr": 0.044285092860186163,
              "tstat": -21.82519758966786,
              "pvalue": 3.197743945413486e-70,
              "ci_lower": -1.053590198175178,
              "ci_upper": -0.8794716057255265,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.625910324731645,
              "residual": 24.374089675268355,
              "abs_error": 24.374089675268355,
              "pct_error": 48.74817935053671
            },
            {
              "rank": 2,
              "index": 195,
              "actual": 50.0,
              "predicted": 31.96635304152596,
              "residual": 18.03364695847404,
              "abs_error": 18.03364695847404,
              "pct_error": 36.06729391694808
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 32.05334082270149,
              "residual": 17.946659177298507,
              "abs_error": 17.946659177298507,
              "pct_error": 35.893318354597014
            },
            {
              "rank": 4,
              "index": 203,
              "actual": 48.5,
              "predicted": 31.154467083887663,
              "residual": 17.345532916112337,
              "abs_error": 17.345532916112337,
              "pct_error": 35.76398539404605
            },
            {
              "rank": 5,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.6172827202848765,
              "residual": 16.282717279715122,
              "abs_error": 16.282717279715122,
              "pct_error": 90.9649010039951
            },
            {
              "rank": 6,
              "index": 268,
              "actual": 43.5,
              "predicted": 31.782712170155392,
              "residual": 11.717287829844608,
              "abs_error": 11.717287829844608,
              "pct_error": 26.93629386171174
            },
            {
              "rank": 7,
              "index": 355,
              "actual": 20.6,
              "predicted": 29.45337269645504,
              "residual": -8.85337269645504,
              "abs_error": 8.85337269645504,
              "pct_error": 42.977537361432226
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.9053629338055416,
              "residual": 7.905362933805542,
              "abs_error": 7.905362933805542,
              "pct_error": 112.93375619722201
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.320534008829192,
              "residual": 7.879465991170807,
              "abs_error": 7.879465991170807,
              "pct_error": 45.81084878587679
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.39106704011464,
              "residual": -7.791067040114639,
              "abs_error": 7.791067040114639,
              "pct_error": 81.15694833452748
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "RM",
            "LSTAT"
          ],
          "rmse": 5.589569804715174,
          "mae": 3.8987597213823584,
          "r2": 0.5739577415025859,
          "adj_r2": 0.5653508271895069,
          "f_stat": 372.61794090137715,
          "f_pvalue": 3.515683819273297e-92,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3.8411770790048347,
              "stderr": 3.5229849736558925,
              "tstat": -1.0903188937018786,
              "pvalue": 0.2762274312067507,
              "ci_lower": -10.767004309133586,
              "ci_upper": 3.084650151123917,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 5.4650987730758604,
              "stderr": 0.49155109855777485,
              "tstat": 11.118068475710091,
              "pvalue": 3.262371414296979e-25,
              "ci_lower": 4.498759714337751,
              "ci_upper": 6.4314378318139696,
              "vif": 1.6006409402077786
            },
            {
              "feature": "LSTAT",
              "coef": -0.6324985627075895,
              "stderr": 0.0490454434324472,
              "tstat": -12.896173802134387,
              "pvalue": 4.500238085886829e-32,
              "ci_lower": -0.728916875637743,
              "ci_upper": -0.5360802497774361,
              "vif": 1.600640940207779
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.10216559183138,
              "residual": 25.89783440816862,
              "abs_error": 25.89783440816862,
              "pct_error": 51.79566881633724
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.28767555746955953,
              "residual": 18.187675557469557,
              "abs_error": 18.187675557469557,
              "pct_error": 101.607126019383
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 11.116649885440253,
              "residual": 16.383350114559747,
              "abs_error": 16.383350114559747,
              "pct_error": 59.575818598399074
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 37.31795502772601,
              "residual": 12.682044972273992,
              "abs_error": 12.682044972273992,
              "pct_error": 25.364089944547985
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 27.62430956570893,
              "residual": -12.62430956570893,
              "abs_error": 12.62430956570893,
              "pct_error": 84.16206377139287
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.666424062043966,
              "residual": 11.833575937956034,
              "abs_error": 11.833575937956034,
              "pct_error": 24.39912564527017
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.24383060328876,
              "residual": 11.756169396711243,
              "abs_error": 11.756169396711243,
              "pct_error": 23.512338793422487
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.052227036966322,
              "residual": -10.452227036966322,
              "abs_error": 10.452227036966322,
              "pct_error": 108.87736496839919
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.534192572401633,
              "residual": 9.534192572401633,
              "abs_error": 9.534192572401633,
              "pct_error": 136.20275103430905
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.759918951394344,
              "residual": 9.240081048605656,
              "abs_error": 9.240081048605656,
              "pct_error": 46.20040524302828
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "RM",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.2072024557895356,
          "mae": 3.3325380783240957,
          "r2": 0.6302528487272829,
          "adj_r2": 0.6189340583821997,
          "f_stat": 291.9135632284608,
          "f_pvalue": 2.4104544838972576e-100,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 14.588099261571122,
              "stderr": 4.299550720314506,
              "tstat": 3.3929357299229683,
              "pvalue": 0.0007604665622395954,
              "ci_lower": 6.135559430163708,
              "ci_upper": 23.040639092978537,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 4.933118359418632,
              "stderr": 0.4724469666746514,
              "tstat": 10.44163410369783,
              "pvalue": 9.887229860519741e-23,
              "ci_lower": 4.004329036111616,
              "ci_upper": 5.861907682725648,
              "vif": 1.645701696061369
            },
            {
              "feature": "PTRATIO",
              "coef": -0.8670947546233064,
              "stderr": 0.1274229510719992,
              "tstat": -6.804855383810428,
              "pvalue": 3.7085050741916926e-11,
              "ci_lower": -1.1175971069464734,
              "ci_upper": -0.6165924023001393,
              "vif": 1.1814032369705776
            },
            {
              "feature": "LSTAT",
              "coef": -0.5671258827383843,
              "stderr": 0.04747167069939138,
              "tstat": -11.946617306343407,
              "pvalue": 2.4225443900007e-28,
              "ci_lower": -0.6604510261200423,
              "ci_upper": -0.47380073935672634,
              "vif": 1.6689911381361473
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 22.33233927782974,
              "residual": 27.66766072217026,
              "abs_error": 27.66766072217026,
              "pct_error": 55.33532144434052
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 0.41114039585148454,
              "residual": 17.488859604148516,
              "abs_error": 17.488859604148516,
              "pct_error": 97.70312628015931
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 10.601683410972765,
              "residual": 16.898316589027235,
              "abs_error": 16.898316589027235,
              "pct_error": 61.44842396009904
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 39.26587800368422,
              "residual": 10.734121996315778,
              "abs_error": 10.734121996315778,
              "pct_error": 21.468243992631557
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 25.5265079166049,
              "residual": -10.5265079166049,
              "abs_error": 10.5265079166049,
              "pct_error": 70.17671944403267
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.84115672589125,
              "residual": 10.158843274108747,
              "abs_error": 10.158843274108747,
              "pct_error": 20.317686548217495
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.420835231889775,
              "residual": 10.079164768110225,
              "abs_error": 10.079164768110225,
              "pct_error": 20.78178302703139
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 18.70904075495627,
              "residual": -9.10904075495627,
              "abs_error": 9.10904075495627,
              "pct_error": 94.88584119746115
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -1.6067680592723317,
              "residual": 8.606768059272332,
              "abs_error": 8.606768059272332,
              "pct_error": 122.95382941817617
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.727784705881488,
              "residual": 8.272215294118512,
              "abs_error": 8.272215294118512,
              "pct_error": 41.361076470592565
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "RM",
            "PTRATIO",
            "B",
            "LSTAT"
          ],
          "rmse": 5.367825083848819,
          "mae": 3.400749036921659,
          "r2": 0.6070904174164292,
          "adj_r2": 0.5908879604026738,
          "f_stat": 234.45705417655216,
          "f_pvalue": 2.460891068398728e-103,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 6.203996838755884,
              "stderr": 4.596658604441538,
              "tstat": 1.3496753560861035,
              "pvalue": 0.17788538173097074,
              "ci_lower": -2.8326997817453226,
              "ci_upper": 15.240693459257091,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 5.226709352310429,
              "stderr": 0.4661367581692041,
              "tstat": 11.212823834873742,
              "pvalue": 1.4975091549643015e-25,
              "ci_lower": 4.3103183757935195,
              "ci_upper": 6.143100328827339,
              "vif": 1.6787455942270224
            },
            {
              "feature": "PTRATIO",
              "coef": -0.8214499409643465,
              "stderr": 0.12489211782832975,
              "tstat": -6.577276094344634,
              "pvalue": 1.5058801838136097e-10,
              "ci_lower": -1.066978764448427,
              "ci_upper": -0.5759211174802661,
              "vif": 1.1892854206005743
            },
            {
              "feature": "B",
              "coef": 0.013466744174713916,
              "stderr": 0.002999759437696028,
              "tstat": 4.489274708326971,
              "pvalue": 9.36578367268826e-06,
              "ci_lower": 0.007569435214951019,
              "ci_upper": 0.019364053134476814,
              "vif": 1.1581340823477757
            },
            {
              "feature": "LSTAT",
              "coef": -0.4952190854868032,
              "stderr": 0.049062616320737516,
              "tstat": -10.093613480565379,
              "pvalue": 1.7374073198070794e-21,
              "ci_lower": -0.5916726221210344,
              "ci_upper": -0.398765548852572,
              "vif": 1.8680977682879492
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 22.31134386011984,
              "residual": 27.68865613988016,
              "abs_error": 27.68865613988016,
              "pct_error": 55.37731227976032
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -2.8330534896227615,
              "residual": 20.733053489622762,
              "abs_error": 20.733053489622762,
              "pct_error": 115.82711446716627
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 9.473714304958417,
              "residual": 18.026285695041583,
              "abs_error": 18.026285695041583,
              "pct_error": 65.55012980015121
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.522839778723405,
              "residual": -11.522839778723405,
              "abs_error": 11.522839778723405,
              "pct_error": 76.81893185815603
            },
            {
              "rank": 5,
              "index": 414,
              "actual": 7.0,
              "predicted": -3.8942846786331824,
              "residual": 10.894284678633182,
              "abs_error": 10.894284678633182,
              "pct_error": 155.6326382661883
            },
            {
              "rank": 6,
              "index": 195,
              "actual": 50.0,
              "predicted": 39.373647710415455,
              "residual": 10.626352289584545,
              "abs_error": 10.626352289584545,
              "pct_error": 21.25270457916909
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.95327161427437,
              "residual": 10.046728385725629,
              "abs_error": 10.046728385725629,
              "pct_error": 20.093456771451258
            },
            {
              "rank": 8,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.57671431151306,
              "residual": 9.923285688486942,
              "abs_error": 9.923285688486942,
              "pct_error": 20.460382862859674
            },
            {
              "rank": 9,
              "index": 381,
              "actual": 10.9,
              "predicted": 18.72525318302982,
              "residual": -7.825253183029821,
              "abs_error": 7.825253183029821,
              "pct_error": 71.79131360577817
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 12.766904794619492,
              "residual": 7.233095205380508,
              "abs_error": 7.233095205380508,
              "pct_error": 36.16547602690254
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "RM",
            "DIS",
            "PTRATIO",
            "B",
            "LSTAT"
          ],
          "rmse": 5.374532960326924,
          "mae": 3.431749450212688,
          "r2": 0.606107808750429,
          "adj_r2": 0.5855925904561805,
          "f_stat": 203.46434873280924,
          "f_pvalue": 2.961085096123818e-107,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 12.272211715357027,
              "stderr": 4.633020271026974,
              "tstat": 2.6488577639304647,
              "pvalue": 0.00839787924127105,
              "ci_lower": 3.1639610767051067,
              "ci_upper": 21.380462354008948,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 4.89743109427368,
              "stderr": 0.45789903816126065,
              "tstat": 10.695438701814714,
              "pvalue": 1.2286435469213137e-23,
              "ci_lower": 3.997227995044434,
              "ci_upper": 5.797634193502925,
              "vif": 1.7150517168821262
            },
            {
              "feature": "DIS",
              "coef": -0.6773433109041571,
              "stderr": 0.1370461523449394,
              "tstat": -4.942446754720356,
              "pvalue": 1.1388596371974813e-06,
              "ci_lower": -0.9467681421371726,
              "ci_upper": -0.4079184796711416,
              "vif": 1.386388353710533
            },
            {
              "feature": "PTRATIO",
              "coef": -0.860943476609669,
              "stderr": 0.12164220967982102,
              "tstat": -7.077670480302769,
              "pvalue": 6.662994902592741e-12,
              "ci_lower": -1.1000850450012245,
              "ci_upper": -0.6218019082181134,
              "vif": 1.1944396487942048
            },
            {
              "feature": "B",
              "coef": 0.015319165002057903,
              "stderr": 0.0029393829120325093,
              "tstat": 5.2116942434917695,
              "pvalue": 3.011631102550285e-07,
              "ci_lower": 0.009540507728920587,
              "ci_upper": 0.02109782227519522,
              "vif": 1.177274917048263
            },
            {
              "feature": "LSTAT",
              "coef": -0.6032353151453693,
              "stderr": 0.052452582034401625,
              "tstat": -11.500583798710434,
              "pvalue": 1.2674520434542098e-26,
              "ci_lower": -0.7063540661686366,
              "ci_upper": -0.500116564122102,
              "vif": 2.260536441362626
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.3919828172374,
              "residual": 25.6080171827626,
              "abs_error": 25.6080171827626,
              "pct_error": 51.216034365525196
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -3.798218199810133,
              "residual": 21.698218199810132,
              "abs_error": 21.698218199810132,
              "pct_error": 121.21909608832478
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 12.36688776779502,
              "residual": 15.13311223220498,
              "abs_error": 15.13311223220498,
              "pct_error": 55.02949902619992
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 27.7771740338854,
              "residual": -12.777174033885402,
              "abs_error": 12.777174033885402,
              "pct_error": 85.18116022590267
            },
            {
              "rank": 5,
              "index": 414,
              "actual": 7.0,
              "predicted": -5.065945334620324,
              "residual": 12.065945334620324,
              "abs_error": 12.065945334620324,
              "pct_error": 172.3706476374332
            },
            {
              "rank": 6,
              "index": 195,
              "actual": 50.0,
              "predicted": 38.86365509505196,
              "residual": 11.13634490494804,
              "abs_error": 11.13634490494804,
              "pct_error": 22.27268980989608
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.74124313931765,
              "residual": 10.258756860682347,
              "abs_error": 10.258756860682347,
              "pct_error": 20.517513721364693
            },
            {
              "rank": 8,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.3279610061235,
              "residual": 10.172038993876498,
              "abs_error": 10.172038993876498,
              "pct_error": 20.973276276034017
            },
            {
              "rank": 9,
              "index": 381,
              "actual": 10.9,
              "predicted": 19.269796187990124,
              "residual": -8.369796187990124,
              "abs_error": 8.369796187990124,
              "pct_error": 76.78712099073508
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.957302651072704,
              "residual": 8.042697348927296,
              "abs_error": 8.042697348927296,
              "pct_error": 40.213486744636484
            }
          ]
        }
      ],
      "RFE": [
        {
          "k": 1,
          "features": [
            "LSTAT"
          ],
          "rmse": 5.789606996393182,
          "mae": 4.184807930623362,
          "r2": 0.5429180422970384,
          "adj_r2": 0.5383472227200088,
          "f_stat": 476.3392498280435,
          "f_pvalue": 3.197743945413642e-70,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.836949820318516,
              "stderr": 0.6350210267842643,
              "tstat": 54.8595217338428,
              "pvalue": 8.960598634732442e-189,
              "ci_lower": 33.58857299395971,
              "ci_upper": 36.08532664667732,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.9665309019503523,
              "stderr": 0.044285092860186163,
              "tstat": -21.82519758966786,
              "pvalue": 3.197743945413486e-70,
              "ci_lower": -1.053590198175178,
              "ci_upper": -0.8794716057255265,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.625910324731645,
              "residual": 24.374089675268355,
              "abs_error": 24.374089675268355,
              "pct_error": 48.74817935053671
            },
            {
              "rank": 2,
              "index": 195,
              "actual": 50.0,
              "predicted": 31.96635304152596,
              "residual": 18.03364695847404,
              "abs_error": 18.03364695847404,
              "pct_error": 36.06729391694808
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 32.05334082270149,
              "residual": 17.946659177298507,
              "abs_error": 17.946659177298507,
              "pct_error": 35.893318354597014
            },
            {
              "rank": 4,
              "index": 203,
              "actual": 48.5,
              "predicted": 31.154467083887663,
              "residual": 17.345532916112337,
              "abs_error": 17.345532916112337,
              "pct_error": 35.76398539404605
            },
            {
              "rank": 5,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.6172827202848765,
              "residual": 16.282717279715122,
              "abs_error": 16.282717279715122,
              "pct_error": 90.9649010039951
            },
            {
              "rank": 6,
              "index": 268,
              "actual": 43.5,
              "predicted": 31.782712170155392,
              "residual": 11.717287829844608,
              "abs_error": 11.717287829844608,
              "pct_error": 26.93629386171174
            },
            {
              "rank": 7,
              "index": 355,
              "actual": 20.6,
              "predicted": 29.45337269645504,
              "residual": -8.85337269645504,
              "abs_error": 8.85337269645504,
              "pct_error": 42.977537361432226
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.9053629338055416,
              "residual": 7.905362933805542,
              "abs_error": 7.905362933805542,
              "pct_error": 112.93375619722201
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.320534008829192,
              "residual": 7.879465991170807,
              "abs_error": 7.879465991170807,
              "pct_error": 45.81084878587679
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.39106704011464,
              "residual": -7.791067040114639,
              "abs_error": 7.791067040114639,
              "pct_error": 81.15694833452748
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "RM",
            "LSTAT"
          ],
          "rmse": 5.589569804715174,
          "mae": 3.8987597213823584,
          "r2": 0.5739577415025859,
          "adj_r2": 0.5653508271895069,
          "f_stat": 372.61794090137715,
          "f_pvalue": 3.515683819273297e-92,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3.8411770790048347,
              "stderr": 3.5229849736558925,
              "tstat": -1.0903188937018786,
              "pvalue": 0.2762274312067507,
              "ci_lower": -10.767004309133586,
              "ci_upper": 3.084650151123917,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 5.4650987730758604,
              "stderr": 0.49155109855777485,
              "tstat": 11.118068475710091,
              "pvalue": 3.262371414296979e-25,
              "ci_lower": 4.498759714337751,
              "ci_upper": 6.4314378318139696,
              "vif": 1.6006409402077786
            },
            {
              "feature": "LSTAT",
              "coef": -0.6324985627075895,
              "stderr": 0.0490454434324472,
              "tstat": -12.896173802134387,
              "pvalue": 4.500238085886829e-32,
              "ci_lower": -0.728916875637743,
              "ci_upper": -0.5360802497774361,
              "vif": 1.600640940207779
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.10216559183138,
              "residual": 25.89783440816862,
              "abs_error": 25.89783440816862,
              "pct_error": 51.79566881633724
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.28767555746955953,
              "residual": 18.187675557469557,
              "abs_error": 18.187675557469557,
              "pct_error": 101.607126019383
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 11.116649885440253,
              "residual": 16.383350114559747,
              "abs_error": 16.383350114559747,
              "pct_error": 59.575818598399074
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 37.31795502772601,
              "residual": 12.682044972273992,
              "abs_error": 12.682044972273992,
              "pct_error": 25.364089944547985
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 27.62430956570893,
              "residual": -12.62430956570893,
              "abs_error": 12.62430956570893,
              "pct_error": 84.16206377139287
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.666424062043966,
              "residual": 11.833575937956034,
              "abs_error": 11.833575937956034,
              "pct_error": 24.39912564527017
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.24383060328876,
              "residual": 11.756169396711243,
              "abs_error": 11.756169396711243,
              "pct_error": 23.512338793422487
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.052227036966322,
              "residual": -10.452227036966322,
              "abs_error": 10.452227036966322,
              "pct_error": 108.87736496839919
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.534192572401633,
              "residual": 9.534192572401633,
              "abs_error": 9.534192572401633,
              "pct_error": 136.20275103430905
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.759918951394344,
              "residual": 9.240081048605656,
              "abs_error": 9.240081048605656,
              "pct_error": 46.20040524302828
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "RM",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.2072024557895356,
          "mae": 3.3325380783240957,
          "r2": 0.6302528487272829,
          "adj_r2": 0.6189340583821997,
          "f_stat": 291.9135632284608,
          "f_pvalue": 2.4104544838972576e-100,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 14.588099261571122,
              "stderr": 4.299550720314506,
              "tstat": 3.3929357299229683,
              "pvalue": 0.0007604665622395954,
              "ci_lower": 6.135559430163708,
              "ci_upper": 23.040639092978537,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 4.933118359418632,
              "stderr": 0.4724469666746514,
              "tstat": 10.44163410369783,
              "pvalue": 9.887229860519741e-23,
              "ci_lower": 4.004329036111616,
              "ci_upper": 5.861907682725648,
              "vif": 1.645701696061369
            },
            {
              "feature": "PTRATIO",
              "coef": -0.8670947546233064,
              "stderr": 0.1274229510719992,
              "tstat": -6.804855383810428,
              "pvalue": 3.7085050741916926e-11,
              "ci_lower": -1.1175971069464734,
              "ci_upper": -0.6165924023001393,
              "vif": 1.1814032369705776
            },
            {
              "feature": "LSTAT",
              "coef": -0.5671258827383843,
              "stderr": 0.04747167069939138,
              "tstat": -11.946617306343407,
              "pvalue": 2.4225443900007e-28,
              "ci_lower": -0.6604510261200423,
              "ci_upper": -0.47380073935672634,
              "vif": 1.6689911381361473
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 22.33233927782974,
              "residual": 27.66766072217026,
              "abs_error": 27.66766072217026,
              "pct_error": 55.33532144434052
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 0.41114039585148454,
              "residual": 17.488859604148516,
              "abs_error": 17.488859604148516,
              "pct_error": 97.70312628015931
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 10.601683410972765,
              "residual": 16.898316589027235,
              "abs_error": 16.898316589027235,
              "pct_error": 61.44842396009904
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 39.26587800368422,
              "residual": 10.734121996315778,
              "abs_error": 10.734121996315778,
              "pct_error": 21.468243992631557
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 25.5265079166049,
              "residual": -10.5265079166049,
              "abs_error": 10.5265079166049,
              "pct_error": 70.17671944403267
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.84115672589125,
              "residual": 10.158843274108747,
              "abs_error": 10.158843274108747,
              "pct_error": 20.317686548217495
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.420835231889775,
              "residual": 10.079164768110225,
              "abs_error": 10.079164768110225,
              "pct_error": 20.78178302703139
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 18.70904075495627,
              "residual": -9.10904075495627,
              "abs_error": 9.10904075495627,
              "pct_error": 94.88584119746115
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -1.6067680592723317,
              "residual": 8.606768059272332,
              "abs_error": 8.606768059272332,
              "pct_error": 122.95382941817617
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.727784705881488,
              "residual": 8.272215294118512,
              "abs_error": 8.272215294118512,
              "pct_error": 41.361076470592565
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "RM",
            "DIS",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.175138547496572,
          "mae": 3.3396261567351484,
          "r2": 0.634792344924661,
          "adj_r2": 0.6197322354370182,
          "f_stat": 232.30795592710803,
          "f_pvalue": 8.888878818616904e-103,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 20.83862215219693,
              "stderr": 4.471401153626354,
              "tstat": 4.660423307199039,
              "pvalue": 4.308084175730807e-06,
              "ci_lower": 12.048172573270762,
              "ci_upper": 29.629071731123098,
              "vif": null
            },
            {
              "feature": "RM",
              "coef": 4.613158367506614,
              "stderr": 0.4693070266586025,
              "tstat": 9.8297236253879,
              "pvalue": 1.4559596511306698e-20,
              "ci_lower": 3.690534873630998,
              "ci_upper": 5.53578186138223,
              "vif": 1.6907156555653595
            },
            {
              "feature": "DIS",
              "coef": -0.5862708091746118,
              "stderr": 0.14031301973060387,
              "tstat": -4.178306548460232,
              "pvalue": 3.610730965886575e-05,
              "ci_lower": -0.8621160046360912,
              "ci_upper": -0.31042561371313243,
              "vif": 1.3638476285793224
            },
            {
              "feature": "PTRATIO",
              "coef": -0.9067126479593426,
              "stderr": 0.12523916930319817,
              "tstat": -7.239848786957646,
              "pvalue": 2.327864021426827e-12,
              "ci_lower": -1.1529237494109565,
              "ci_upper": -0.6605015465077287,
              "vif": 1.1882140109813928
            },
            {
              "feature": "LSTAT",
              "coef": -0.6691799762470749,
              "stderr": 0.05254586819036414,
              "tstat": -12.735158810636783,
              "pvalue": 2.068485599437981e-31,
              "ci_lower": -0.7724813328103726,
              "ci_upper": -0.5658786196837773,
              "vif": 2.128989973046089
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.13572469919865,
              "residual": 25.86427530080135,
              "abs_error": 25.86427530080135,
              "pct_error": 51.7285506016027
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.03799840574956903,
              "residual": 17.937998405749568,
              "abs_error": 17.937998405749568,
              "pct_error": 100.21228159636631
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 13.240150109869612,
              "residual": 14.259849890130388,
              "abs_error": 14.259849890130388,
              "pct_error": 51.85399960047414
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.49356665811683,
              "residual": -11.49356665811683,
              "abs_error": 11.49356665811683,
              "pct_error": 76.62377772077886
            },
            {
              "rank": 5,
              "index": 195,
              "actual": 50.0,
              "predicted": 38.81162559770126,
              "residual": 11.188374402298741,
              "abs_error": 11.188374402298741,
              "pct_error": 22.376748804597483
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.64428821879547,
              "residual": 10.355711781204533,
              "abs_error": 10.355711781204533,
              "pct_error": 20.711423562409067
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.186969176366986,
              "residual": 10.313030823633014,
              "abs_error": 10.313030823633014,
              "pct_error": 21.263981079655697
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 19.075878382165655,
              "residual": -9.475878382165655,
              "abs_error": 9.475878382165655,
              "pct_error": 98.70706648089225
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.348540451209562,
              "residual": 9.348540451209562,
              "abs_error": 9.348540451209562,
              "pct_error": 133.55057787442232
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.903320179011919,
              "residual": 9.096679820988081,
              "abs_error": 9.096679820988081,
              "pct_error": 45.4833991049404
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "NOX",
            "RM",
            "DIS",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.019723085624439,
          "mae": 3.272135228363101,
          "r2": 0.6563982005228929,
          "adj_r2": 0.6385022734667936,
          "f_stat": 201.59273631881976,
          "f_pvalue": 1.1043287762061908e-106,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.21962769924458,
              "stderr": 5.122606931267524,
              "tstat": 6.68011974340131,
              "pvalue": 8.063726883960275e-11,
              "ci_lower": 24.14887792397158,
              "ci_upper": 44.290377474517584,
              "vif": null
            },
            {
              "feature": "NOX",
              "coef": -17.97516173544699,
              "stderr": 3.6426543638522424,
              "tstat": -4.934632808927166,
              "pvalue": 1.182665687769326e-06,
              "ci_lower": -25.136410120960953,
              "ci_upper": -10.813913349933024,
              "vif": 2.9677876303444717
            },
            {
              "feature": "RM",
              "coef": 4.544236335210103,
              "stderr": 0.45636301056471507,
              "tstat": 9.957503632003283,
              "pvalue": 5.284072600270776e-21,
              "ci_lower": 3.6470529776437015,
              "ci_upper": 5.441419692776504,
              "vif": 1.692300779222402
            },
            {
              "feature": "DIS",
              "coef": -1.2232723498319864,
              "stderr": 0.18778433482059478,
              "tstat": -6.514240663368833,
              "pvalue": 2.2097242176328286e-10,
              "ci_lower": -1.5924455214355238,
              "ci_upper": -0.854099178228449,
              "vif": 2.585763800315969
            },
            {
              "feature": "PTRATIO",
              "coef": -0.9947365129471866,
              "stderr": 0.12302792702645997,
              "tstat": -8.08545292918124,
              "pvalue": 7.53076226035598e-15,
              "ci_lower": -1.2366023217195679,
              "ci_upper": -0.7528707041748054,
              "vif": 1.2137296069763288
            },
            {
              "feature": "LSTAT",
              "coef": -0.5812426313084693,
              "stderr": 0.05409237111157258,
              "tstat": -10.745371655266887,
              "pvalue": 8.08166794207986e-24,
              "ci_lower": -0.687585113080941,
              "ci_upper": -0.4749001495359977,
              "vif": 2.388189202906746
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.061226161752195,
              "residual": 25.938773838247805,
              "abs_error": 25.938773838247805,
              "pct_error": 51.8775476764956
            },
            {
              "rank": 2,
              "index": 365,
              "actual": 27.5,
              "predicted": 11.289979111678505,
              "residual": 16.210020888321495,
              "abs_error": 16.210020888321495,
              "pct_error": 58.94553050298725
            },
            {
              "rank": 3,
              "index": 412,
              "actual": 17.9,
              "predicted": 2.547352198525985,
              "residual": 15.352647801474014,
              "abs_error": 15.352647801474014,
              "pct_error": 85.76898213113975
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 25.874522573748415,
              "residual": -10.874522573748415,
              "abs_error": 10.874522573748415,
              "pct_error": 72.49681715832277
            },
            {
              "rank": 5,
              "index": 195,
              "actual": 50.0,
              "predicted": 39.45994264444901,
              "residual": 10.540057355550992,
              "abs_error": 10.540057355550992,
              "pct_error": 21.080114711101984
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 40.69124421327104,
              "residual": 9.308755786728959,
              "abs_error": 9.308755786728959,
              "pct_error": 18.617511573457918
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 39.328181789481135,
              "residual": 9.171818210518865,
              "abs_error": 9.171818210518865,
              "pct_error": 18.910965382513123
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -1.3182156624174084,
              "residual": 8.318215662417408,
              "abs_error": 8.318215662417408,
              "pct_error": 118.83165232024868
            },
            {
              "rank": 9,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.24348671238182,
              "residual": -7.64348671238182,
              "abs_error": 7.64348671238182,
              "pct_error": 79.61965325397729
            },
            {
              "rank": 10,
              "index": 0,
              "actual": 24.0,
              "predicted": 31.310103726759692,
              "residual": -7.310103726759692,
              "abs_error": 7.310103726759692,
              "pct_error": 30.458765528165383
            }
          ]
        }
      ],
      "ElasticNet": [
        {
          "k": 1,
          "features": [
            "LSTAT"
          ],
          "rmse": 5.789606996393182,
          "mae": 4.184807930623362,
          "r2": 0.5429180422970384,
          "adj_r2": 0.5383472227200088,
          "f_stat": 476.3392498280435,
          "f_pvalue": 3.197743945413642e-70,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.836949820318516,
              "stderr": 0.6350210267842643,
              "tstat": 54.8595217338428,
              "pvalue": 8.960598634732442e-189,
              "ci_lower": 33.58857299395971,
              "ci_upper": 36.08532664667732,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.9665309019503523,
              "stderr": 0.044285092860186163,
              "tstat": -21.82519758966786,
              "pvalue": 3.197743945413486e-70,
              "ci_lower": -1.053590198175178,
              "ci_upper": -0.8794716057255265,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.625910324731645,
              "residual": 24.374089675268355,
              "abs_error": 24.374089675268355,
              "pct_error": 48.74817935053671
            },
            {
              "rank": 2,
              "index": 195,
              "actual": 50.0,
              "predicted": 31.96635304152596,
              "residual": 18.03364695847404,
              "abs_error": 18.03364695847404,
              "pct_error": 36.06729391694808
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 32.05334082270149,
              "residual": 17.946659177298507,
              "abs_error": 17.946659177298507,
              "pct_error": 35.893318354597014
            },
            {
              "rank": 4,
              "index": 203,
              "actual": 48.5,
              "predicted": 31.154467083887663,
              "residual": 17.345532916112337,
              "abs_error": 17.345532916112337,
              "pct_error": 35.76398539404605
            },
            {
              "rank": 5,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.6172827202848765,
              "residual": 16.282717279715122,
              "abs_error": 16.282717279715122,
              "pct_error": 90.9649010039951
            },
            {
              "rank": 6,
              "index": 268,
              "actual": 43.5,
              "predicted": 31.782712170155392,
              "residual": 11.717287829844608,
              "abs_error": 11.717287829844608,
              "pct_error": 26.93629386171174
            },
            {
              "rank": 7,
              "index": 355,
              "actual": 20.6,
              "predicted": 29.45337269645504,
              "residual": -8.85337269645504,
              "abs_error": 8.85337269645504,
              "pct_error": 42.977537361432226
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.9053629338055416,
              "residual": 7.905362933805542,
              "abs_error": 7.905362933805542,
              "pct_error": 112.93375619722201
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.320534008829192,
              "residual": 7.879465991170807,
              "abs_error": 7.879465991170807,
              "pct_error": 45.81084878587679
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.39106704011464,
              "residual": -7.791067040114639,
              "abs_error": 7.791067040114639,
              "pct_error": 81.15694833452748
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "LSTAT",
            "RM"
          ],
          "rmse": 5.589569804715174,
          "mae": 3.898759721382357,
          "r2": 0.5739577415025859,
          "adj_r2": 0.5653508271895069,
          "f_stat": 372.61794090137715,
          "f_pvalue": 3.515683819273297e-92,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": -3.841177079004873,
              "stderr": 3.5229849736558925,
              "tstat": -1.0903188937018895,
              "pvalue": 0.2762274312067459,
              "ci_lower": -10.767004309133625,
              "ci_upper": 3.0846501511238786,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.632498562707589,
              "stderr": 0.04904544343244711,
              "tstat": -12.896173802134399,
              "pvalue": 4.500238085886292e-32,
              "ci_lower": -0.7289168756377422,
              "ci_upper": -0.5360802497774357,
              "vif": 1.600640940207779
            },
            {
              "feature": "RM",
              "coef": 5.465098773075864,
              "stderr": 0.4915510985577746,
              "tstat": 11.118068475710103,
              "pvalue": 3.2623714142966794e-25,
              "ci_lower": 4.498759714337755,
              "ci_upper": 6.431437831813973,
              "vif": 1.6006409402077786
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.102165591831383,
              "residual": 25.897834408168617,
              "abs_error": 25.897834408168617,
              "pct_error": 51.79566881633724
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.2876755574695742,
              "residual": 18.18767555746957,
              "abs_error": 18.18767555746957,
              "pct_error": 101.60712601938309
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 11.11664988544025,
              "residual": 16.38335011455975,
              "abs_error": 16.38335011455975,
              "pct_error": 59.57581859839909
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 37.317955027726015,
              "residual": 12.682044972273985,
              "abs_error": 12.682044972273985,
              "pct_error": 25.364089944547967
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 27.62430956570893,
              "residual": -12.62430956570893,
              "abs_error": 12.62430956570893,
              "pct_error": 84.16206377139287
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.66642406204397,
              "residual": 11.833575937956027,
              "abs_error": 11.833575937956027,
              "pct_error": 24.39912564527016
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.243830603288764,
              "residual": 11.756169396711236,
              "abs_error": 11.756169396711236,
              "pct_error": 23.512338793422472
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.05222703696632,
              "residual": -10.452227036966319,
              "abs_error": 10.452227036966319,
              "pct_error": 108.87736496839915
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.534192572401648,
              "residual": 9.534192572401647,
              "abs_error": 9.534192572401647,
              "pct_error": 136.20275103430924
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.759918951394335,
              "residual": 9.240081048605665,
              "abs_error": 9.240081048605665,
              "pct_error": 46.20040524302833
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "LSTAT",
            "RM",
            "DIS"
          ],
          "rmse": 5.59161309309234,
          "mae": 3.9077816817597117,
          "r2": 0.573646201853689,
          "adj_r2": 0.560594554971659,
          "f_stat": 258.98286232948635,
          "f_pvalue": 2.3694930004600715e-93,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 0.8578000158653802,
              "stderr": 3.737324917723032,
              "tstat": 0.2295224618543457,
              "pvalue": 0.8185801815206396,
              "ci_lower": -6.489453170545365,
              "ci_upper": 8.205053202276126,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.7237598855816978,
              "stderr": 0.05524339585820846,
              "tstat": -13.101292459271516,
              "pvalue": 7.019302317825738e-33,
              "ci_lower": -0.8323635593812612,
              "ci_upper": -0.6151562117821344,
              "vif": 2.0851668725608867
            },
            {
              "feature": "RM",
              "coef": 5.20823012429305,
              "stderr": 0.49085165433716127,
              "tstat": 10.61059910519435,
              "pvalue": 2.425914266989586e-23,
              "ci_lower": 4.243258798337023,
              "ci_upper": 6.173201450249077,
              "vif": 1.6388552216311458
            },
            {
              "feature": "DIS",
              "coef": -0.509361596161198,
              "stderr": 0.14863049009784507,
              "tstat": -3.4270330120413366,
              "pvalue": 0.0006734911290612348,
              "ci_lower": -0.8015561112247961,
              "ci_upper": -0.21716708109759997,
              "vif": 1.356030132827216
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.739232116805336,
              "residual": 24.260767883194664,
              "abs_error": 24.260767883194664,
              "pct_error": 48.52153576638933
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.7056352206242498,
              "residual": 18.605635220624247,
              "abs_error": 18.605635220624247,
              "pct_error": 103.94209620460475
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 13.429434976203982,
              "residual": 14.070565023796018,
              "abs_error": 14.070565023796018,
              "pct_error": 51.16569099562188
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 28.547781383575447,
              "residual": -13.547781383575447,
              "abs_error": 13.547781383575447,
              "pct_error": 90.31854255716965
            },
            {
              "rank": 5,
              "index": 195,
              "actual": 50.0,
              "predicted": 36.8459673447386,
              "residual": 13.154032655261403,
              "abs_error": 13.154032655261403,
              "pct_error": 26.308065310522803
            },
            {
              "rank": 6,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.39359336871941,
              "residual": 12.106406631280592,
              "abs_error": 12.106406631280592,
              "pct_error": 24.96166315727957
            },
            {
              "rank": 7,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.00937971480745,
              "residual": 11.990620285192549,
              "abs_error": 11.990620285192549,
              "pct_error": 23.981240570385097
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 20.424261381700706,
              "residual": -10.824261381700707,
              "abs_error": 10.824261381700707,
              "pct_error": 112.75272272604904
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -3.2154720200200364,
              "residual": 10.215472020020037,
              "abs_error": 10.215472020020037,
              "pct_error": 145.93531457171483
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.00518985688137,
              "residual": 9.99481014311863,
              "abs_error": 9.99481014311863,
              "pct_error": 49.974050715593144
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "LSTAT",
            "RM",
            "DIS",
            "PTRATIO"
          ],
          "rmse": 5.175138547496575,
          "mae": 3.3396261567351466,
          "r2": 0.6347923449246606,
          "adj_r2": 0.6197322354370178,
          "f_stat": 232.30795592710797,
          "f_pvalue": 8.888878818617229e-103,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 20.838622152196994,
              "stderr": 4.471401153626348,
              "tstat": 4.660423307199059,
              "pvalue": 4.308084175730417e-06,
              "ci_lower": 12.048172573270836,
              "ci_upper": 29.62907173112315,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.6691799762470754,
              "stderr": 0.0525458681903641,
              "tstat": -12.7351588106368,
              "pvalue": 2.0684855994376756e-31,
              "ci_lower": -0.7724813328103729,
              "ci_upper": -0.5658786196837778,
              "vif": 2.128989973046089
            },
            {
              "feature": "RM",
              "coef": 4.613158367506607,
              "stderr": 0.46930702665860224,
              "tstat": 9.82972362538789,
              "pvalue": 1.4559596511307728e-20,
              "ci_lower": 3.690534873630992,
              "ci_upper": 5.535781861382222,
              "vif": 1.6907156555653595
            },
            {
              "feature": "DIS",
              "coef": -0.5862708091746107,
              "stderr": 0.14031301973060387,
              "tstat": -4.178306548460224,
              "pvalue": 3.6107309658867035e-05,
              "ci_lower": -0.8621160046360901,
              "ci_upper": -0.3104256137131313,
              "vif": 1.3638476285793224
            },
            {
              "feature": "PTRATIO",
              "coef": -0.9067126479593428,
              "stderr": 0.12523916930319803,
              "tstat": -7.239848786957656,
              "pvalue": 2.3278640214266804e-12,
              "ci_lower": -1.1529237494109563,
              "ci_upper": -0.6605015465077292,
              "vif": 1.1882140109813928
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.135724699198647,
              "residual": 25.864275300801353,
              "abs_error": 25.864275300801353,
              "pct_error": 51.728550601602706
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.03799840574959035,
              "residual": 17.93799840574959,
              "abs_error": 17.93799840574959,
              "pct_error": 100.21228159636644
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 13.2401501098696,
              "residual": 14.2598498901304,
              "abs_error": 14.2598498901304,
              "pct_error": 51.85399960047419
            },
            {
              "rank": 4,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.49356665811683,
              "residual": -11.49356665811683,
              "abs_error": 11.49356665811683,
              "pct_error": 76.62377772077886
            },
            {
              "rank": 5,
              "index": 195,
              "actual": 50.0,
              "predicted": 38.811625597701266,
              "residual": 11.188374402298734,
              "abs_error": 11.188374402298734,
              "pct_error": 22.37674880459747
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.64428821879548,
              "residual": 10.35571178120452,
              "abs_error": 10.35571178120452,
              "pct_error": 20.71142356240904
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.186969176367,
              "residual": 10.313030823633,
              "abs_error": 10.313030823633,
              "pct_error": 21.263981079655668
            },
            {
              "rank": 8,
              "index": 436,
              "actual": 9.6,
              "predicted": 19.075878382165648,
              "residual": -9.475878382165648,
              "abs_error": 9.475878382165648,
              "pct_error": 98.70706648089217
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.348540451209587,
              "residual": 9.348540451209587,
              "abs_error": 9.348540451209587,
              "pct_error": 133.55057787442266
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 10.903320179011901,
              "residual": 9.096679820988099,
              "abs_error": 9.096679820988099,
              "pct_error": 45.48339910494049
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "LSTAT",
            "RM",
            "DIS",
            "PTRATIO",
            "RAD"
          ],
          "rmse": 5.248519448289316,
          "mae": 3.35890484422523,
          "r2": 0.624361989632421,
          "adj_r2": 0.6047975099257763,
          "f_stat": 187.26393938038052,
          "f_pvalue": 3.5429397156250777e-102,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 18.900823907959662,
              "stderr": 4.607564513628788,
              "tstat": 4.102128977695833,
              "pvalue": 4.9665708101195646e-05,
              "ci_lower": 9.842617820165708,
              "ci_upper": 27.959029995753617,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.6438480783458225,
              "stderr": 0.0545464796277632,
              "tstat": -11.80365960809165,
              "pvalue": 8.935456903185945e-28,
              "ci_lower": -0.7510833112699513,
              "ci_upper": -0.5366128454216936,
              "vif": 2.3047081695049845
            },
            {
              "feature": "RM",
              "coef": 4.751218854532467,
              "stderr": 0.4753759506832609,
              "tstat": 9.994655488363493,
              "pvalue": 3.916891881899898e-21,
              "ci_lower": 3.81665715328379,
              "ci_upper": 5.685780555781143,
              "vif": 1.7426769630068129
            },
            {
              "feature": "DIS",
              "coef": -0.6613037040089985,
              "stderr": 0.14692903960411746,
              "tstat": -4.500837314330791,
              "pvalue": 8.89968968244063e-06,
              "ci_lower": -0.950157721587918,
              "ci_upper": -0.372449686430079,
              "vif": 1.5023502910249638
            },
            {
              "feature": "PTRATIO",
              "coef": -0.8165255009733957,
              "stderr": 0.13597286324657412,
              "tstat": -6.005062197540863,
              "pvalue": 4.314225788297899e-09,
              "ci_lower": -1.0838403077420726,
              "ci_upper": -0.5492106942047188,
              "vif": 1.4070347179140978
            },
            {
              "feature": "RAD",
              "coef": -0.0658457952274525,
              "stderr": 0.03914961025849326,
              "tstat": -1.6819016790382393,
              "pvalue": 0.09337229547353143,
              "ci_lower": -0.1428116710017998,
              "ci_upper": 0.011120080546894812,
              "vif": 1.7326456410640996
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 23.4512837556194,
              "residual": 26.5487162443806,
              "abs_error": 26.5487162443806,
              "pct_error": 53.0974324887612
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": -0.341307716791011,
              "residual": 18.24130771679101,
              "abs_error": 18.24130771679101,
              "pct_error": 101.90674702117883
            },
            {
              "rank": 3,
              "index": 365,
              "actual": 27.5,
              "predicted": 12.094786590698707,
              "residual": 15.405213409301293,
              "abs_error": 15.405213409301293,
              "pct_error": 56.018957852004704
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 38.647785358064596,
              "residual": 11.352214641935404,
              "abs_error": 11.352214641935404,
              "pct_error": 22.70442928387081
            },
            {
              "rank": 5,
              "index": 375,
              "actual": 15.0,
              "predicted": 26.048580947479234,
              "residual": -11.048580947479234,
              "abs_error": 11.048580947479234,
              "pct_error": 73.65720631652822
            },
            {
              "rank": 6,
              "index": 204,
              "actual": 50.0,
              "predicted": 39.566973317300736,
              "residual": 10.433026682699264,
              "abs_error": 10.433026682699264,
              "pct_error": 20.86605336539853
            },
            {
              "rank": 7,
              "index": 203,
              "actual": 48.5,
              "predicted": 38.10822399176874,
              "residual": 10.391776008231261,
              "abs_error": 10.391776008231261,
              "pct_error": 21.426342285012907
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -2.608608032745778,
              "residual": 9.608608032745778,
              "abs_error": 9.608608032745778,
              "pct_error": 137.2658290392254
            },
            {
              "rank": 9,
              "index": 436,
              "actual": 9.6,
              "predicted": 18.578550110181965,
              "residual": -8.978550110181965,
              "abs_error": 8.978550110181965,
              "pct_error": 93.5265636477288
            },
            {
              "rank": 10,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.411575985526294,
              "residual": 8.588424014473706,
              "abs_error": 8.588424014473706,
              "pct_error": 42.942120072368525
            }
          ]
        }
      ],
      "Exhaustive": [
        {
          "k": 1,
          "features": [
            "LSTAT"
          ],
          "rmse": 5.789606996393182,
          "mae": 4.184807930623362,
          "r2": 0.5429180422970384,
          "adj_r2": 0.5383472227200088,
          "f_stat": 476.3392498280435,
          "f_pvalue": 3.197743945413642e-70,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 34.836949820318516,
              "stderr": 0.6350210267842643,
              "tstat": 54.8595217338428,
              "pvalue": 8.960598634732442e-189,
              "ci_lower": 33.58857299395971,
              "ci_upper": 36.08532664667732,
              "vif": null
            },
            {
              "feature": "LSTAT",
              "coef": -0.9665309019503523,
              "stderr": 0.044285092860186163,
              "tstat": -21.82519758966786,
              "pvalue": 3.197743945413486e-70,
              "ci_lower": -1.053590198175178,
              "ci_upper": -0.8794716057255265,
              "vif": 1.0
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.625910324731645,
              "residual": 24.374089675268355,
              "abs_error": 24.374089675268355,
              "pct_error": 48.74817935053671
            },
            {
              "rank": 2,
              "index": 195,
              "actual": 50.0,
              "predicted": 31.96635304152596,
              "residual": 18.03364695847404,
              "abs_error": 18.03364695847404,
              "pct_error": 36.06729391694808
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 32.05334082270149,
              "residual": 17.946659177298507,
              "abs_error": 17.946659177298507,
              "pct_error": 35.893318354597014
            },
            {
              "rank": 4,
              "index": 203,
              "actual": 48.5,
              "predicted": 31.154467083887663,
              "residual": 17.345532916112337,
              "abs_error": 17.345532916112337,
              "pct_error": 35.76398539404605
            },
            {
              "rank": 5,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.6172827202848765,
              "residual": 16.282717279715122,
              "abs_error": 16.282717279715122,
              "pct_error": 90.9649010039951
            },
            {
              "rank": 6,
              "index": 268,
              "actual": 43.5,
              "predicted": 31.782712170155392,
              "residual": 11.717287829844608,
              "abs_error": 11.717287829844608,
              "pct_error": 26.93629386171174
            },
            {
              "rank": 7,
              "index": 355,
              "actual": 20.6,
              "predicted": 29.45337269645504,
              "residual": -8.85337269645504,
              "abs_error": 8.85337269645504,
              "pct_error": 42.977537361432226
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.9053629338055416,
              "residual": 7.905362933805542,
              "abs_error": 7.905362933805542,
              "pct_error": 112.93375619722201
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.320534008829192,
              "residual": 7.879465991170807,
              "abs_error": 7.879465991170807,
              "pct_error": 45.81084878587679
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 17.39106704011464,
              "residual": -7.791067040114639,
              "abs_error": 7.791067040114639,
              "pct_error": 81.15694833452748
            }
          ]
        },
        {
          "k": 2,
          "features": [
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.252477098378797,
          "mae": 3.5527717131981396,
          "r2": 0.6237952757915202,
          "adj_r2": 0.616195180352965,
          "f_stat": 301.9991701773724,
          "f_pvalue": 9.915054931845205e-81,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 53.22459721315131,
              "stderr": 2.466979883508844,
              "tstat": 21.57479984694837,
              "pvalue": 4.4133471533661987e-69,
              "ci_lower": 48.3747677131251,
              "ci_upper": 58.07442671317752,
              "vif": null
            },
            {
              "feature": "PTRATIO",
              "coef": -1.0872554596734485,
              "stderr": 0.141585113245402,
              "tstat": -7.679165095478408,
              "pvalue": 1.2369860113230408e-13,
              "ci_lower": -1.3655972749319678,
              "ci_upper": -0.8089136444149292,
              "vif": 1.149055380154741
            },
            {
              "feature": "LSTAT",
              "coef": -0.8437887126281957,
              "stderr": 0.044378897897734325,
              "tstat": -19.013286778157543,
              "pvalue": 6.335074111211338e-58,
              "ci_lower": -0.9310330755197797,
              "ci_upper": -0.7565443497366117,
              "vif": 1.1490553801547412
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 23.22073049640094,
              "residual": 26.77926950359906,
              "abs_error": 26.77926950359906,
              "pct_error": 53.55853900719813
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 2.2610188747165623,
              "residual": 15.638981125283436,
              "abs_error": 15.638981125283436,
              "pct_error": 87.36860963845497
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 34.811830463582396,
              "residual": 15.188169536417604,
              "abs_error": 15.188169536417604,
              "pct_error": 30.376339072835208
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 35.0620661173479,
              "residual": 14.937933882652104,
              "abs_error": 14.937933882652104,
              "pct_error": 29.87586776530421
            },
            {
              "rank": 5,
              "index": 203,
              "actual": 48.5,
              "predicted": 34.02710696083818,
              "residual": 14.472893039161818,
              "abs_error": 14.472893039161818,
              "pct_error": 29.84101657559138
            },
            {
              "rank": 6,
              "index": 0,
              "actual": 24.0,
              "predicted": 32.38752089125912,
              "residual": -8.387520891259122,
              "abs_error": 8.387520891259122,
              "pct_error": 34.94800371357967
            },
            {
              "rank": 7,
              "index": 473,
              "actual": 29.8,
              "predicted": 21.423460538502884,
              "residual": 8.376539461497117,
              "abs_error": 8.376539461497117,
              "pct_error": 28.109192823815825
            },
            {
              "rank": 8,
              "index": 408,
              "actual": 17.2,
              "predicted": 8.986014914363281,
              "residual": 8.213985085636718,
              "abs_error": 8.213985085636718,
              "pct_error": 47.755727242073945
            },
            {
              "rank": 9,
              "index": 268,
              "actual": 43.5,
              "predicted": 36.423903905491365,
              "residual": 7.076096094508635,
              "abs_error": 7.076096094508635,
              "pct_error": 16.26688757358307
            },
            {
              "rank": 10,
              "index": 414,
              "actual": 7.0,
              "predicted": 0.05873033475697298,
              "residual": 6.941269665243027,
              "abs_error": 6.941269665243027,
              "pct_error": 99.16099521775753
            }
          ]
        },
        {
          "k": 3,
          "features": [
            "RAD",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.172043554970068,
          "mae": 3.580363588182646,
          "r2": 0.6352290393088509,
          "adj_r2": 0.6240625813285097,
          "f_stat": 203.27542377235,
          "f_pvalue": 4.546057300753107e-80,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 54.67795110536302,
              "stderr": 2.6035911607200912,
              "tstat": 21.000974319731675,
              "pvalue": 1.543142764974446e-66,
              "ci_lower": 49.55951910578027,
              "ci_upper": 59.796383104945775,
              "vif": null
            },
            {
              "feature": "RAD",
              "coef": 0.07164345421852776,
              "stderr": 0.04188049209685716,
              "tstat": 1.710664097566898,
              "pvalue": 0.08791848142332856,
              "ci_lower": -0.010689922135207697,
              "ci_upper": 0.15397683057226322,
              "vif": 1.5006008372467514
            },
            {
              "feature": "PTRATIO",
              "coef": -1.182207886634349,
              "stderr": 0.15176112660171745,
              "tstat": -7.789925609454261,
              "pvalue": 5.828095277755697e-14,
              "ci_lower": -1.4805569586430747,
              "ci_upper": -0.8838588146256235,
              "vif": 1.3265028265027115
            },
            {
              "feature": "LSTAT",
              "coef": -0.8746389796645861,
              "stderr": 0.04780479987592114,
              "tstat": -18.296049391164466,
              "pvalue": 9.009248654765346e-55,
              "ci_lower": -0.9686190258062738,
              "ci_upper": -0.7806589335228985,
              "vif": 1.3397145198532117
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 24.181485220390357,
              "residual": 25.818514779609643,
              "abs_error": 25.818514779609643,
              "pct_error": 51.637029559219286
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 2.455452965522049,
              "residual": 15.44454703447795,
              "abs_error": 15.44454703447795,
              "pct_error": 86.28238566747459
            },
            {
              "rank": 3,
              "index": 204,
              "actual": 50.0,
              "predicted": 35.067108727278196,
              "residual": 14.932891272721804,
              "abs_error": 14.932891272721804,
              "pct_error": 29.865782545443608
            },
            {
              "rank": 4,
              "index": 195,
              "actual": 50.0,
              "predicted": 35.34305358509869,
              "residual": 14.656946414901313,
              "abs_error": 14.656946414901313,
              "pct_error": 29.313892829802622
            },
            {
              "rank": 5,
              "index": 203,
              "actual": 48.5,
              "predicted": 34.253694476190134,
              "residual": 14.246305523809866,
              "abs_error": 14.246305523809866,
              "pct_error": 29.373825822288385
            },
            {
              "rank": 6,
              "index": 0,
              "actual": 24.0,
              "predicted": 32.306111775346366,
              "residual": -8.306111775346366,
              "abs_error": 8.306111775346366,
              "pct_error": 34.60879906394319
            },
            {
              "rank": 7,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.426325633448798,
              "residual": 7.773674366551202,
              "abs_error": 7.773674366551202,
              "pct_error": 45.19578120087908
            },
            {
              "rank": 8,
              "index": 473,
              "actual": 29.8,
              "predicted": 22.31850419370479,
              "residual": 7.481495806295211,
              "abs_error": 7.481495806295211,
              "pct_error": 25.10569062515171
            },
            {
              "rank": 9,
              "index": 209,
              "actual": 20.0,
              "predicted": 12.780044190382952,
              "residual": 7.219955809617048,
              "abs_error": 7.219955809617048,
              "pct_error": 36.09977904808524
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 16.72956111364809,
              "residual": -7.129561113648089,
              "abs_error": 7.129561113648089,
              "pct_error": 74.26626160050093
            }
          ]
        },
        {
          "k": 4,
          "features": [
            "ZN",
            "DIS",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 5.007686137361534,
          "mae": 3.413712359945477,
          "r2": 0.6580440914182826,
          "adj_r2": 0.6439428168375931,
          "f_stat": 170.18654178685463,
          "f_pvalue": 7.070741193709371e-85,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 57.22132856068772,
              "stderr": 2.6431760349528064,
              "tstat": 21.648701336575716,
              "pvalue": 2.671375299979641e-69,
              "ci_lower": 52.025036645650076,
              "ci_upper": 62.41762047572537,
              "vif": null
            },
            {
              "feature": "ZN",
              "coef": 0.03518739228262008,
              "stderr": 0.01781278040480501,
              "tstat": 1.9754014523823724,
              "pvalue": 0.0489113403862398,
              "ci_lower": 0.00016876106856929945,
              "ci_upper": 0.07020602349667085,
              "vif": 2.1087107313008056
            },
            {
              "feature": "DIS",
              "coef": -1.0520647563457914,
              "stderr": 0.19602642020698519,
              "tstat": -5.366953879150124,
              "pvalue": 1.361109330258807e-07,
              "ci_lower": -1.4374384465523602,
              "ci_upper": -0.6666910661392226,
              "vif": 2.163948485224847
            },
            {
              "feature": "PTRATIO",
              "coef": -1.0292602678942822,
              "stderr": 0.14464413671329934,
              "tstat": -7.1158105076487805,
              "pvalue": 5.1973451005425984e-12,
              "ci_lower": -1.313620124453869,
              "ci_upper": -0.7449004113346953,
              "vif": 1.2884387257608072
            },
            {
              "feature": "LSTAT",
              "coef": -0.9609670383369404,
              "stderr": 0.04815087544525006,
              "tstat": -19.95741571572479,
              "pvalue": 5.909210023602208e-62,
              "ci_lower": -1.055628158697244,
              "ci_upper": -0.8663059179766368,
              "vif": 1.4532911759223879
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 26.042286367228304,
              "residual": 23.957713632771696,
              "abs_error": 23.957713632771696,
              "pct_error": 47.91542726554339
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 1.767030616696772,
              "residual": 16.132969383303227,
              "abs_error": 16.132969383303227,
              "pct_error": 90.128320577113
            },
            {
              "rank": 3,
              "index": 195,
              "actual": 50.0,
              "predicted": 36.41841741201536,
              "residual": 13.581582587984641,
              "abs_error": 13.581582587984641,
              "pct_error": 27.163165175969283
            },
            {
              "rank": 4,
              "index": 204,
              "actual": 50.0,
              "predicted": 37.281952396102504,
              "residual": 12.718047603897496,
              "abs_error": 12.718047603897496,
              "pct_error": 25.43609520779499
            },
            {
              "rank": 5,
              "index": 203,
              "actual": 48.5,
              "predicted": 36.38825305044915,
              "residual": 12.111746949550849,
              "abs_error": 12.111746949550849,
              "pct_error": 24.972674122785254
            },
            {
              "rank": 6,
              "index": 0,
              "actual": 24.0,
              "predicted": 33.018458818620104,
              "residual": -9.018458818620104,
              "abs_error": 9.018458818620104,
              "pct_error": 37.57691174425044
            },
            {
              "rank": 7,
              "index": 209,
              "actual": 20.0,
              "predicted": 11.81160773181412,
              "residual": 8.18839226818588,
              "abs_error": 8.18839226818588,
              "pct_error": 40.941961340929396
            },
            {
              "rank": 8,
              "index": 414,
              "actual": 7.0,
              "predicted": -0.8508237074495142,
              "residual": 7.850823707449514,
              "abs_error": 7.850823707449514,
              "pct_error": 112.15462439213593
            },
            {
              "rank": 9,
              "index": 408,
              "actual": 17.2,
              "predicted": 9.530302736071711,
              "residual": 7.669697263928288,
              "abs_error": 7.669697263928288,
              "pct_error": 44.59126316237377
            },
            {
              "rank": 10,
              "index": 436,
              "actual": 9.6,
              "predicted": 16.97795122618333,
              "residual": -7.377951226183329,
              "abs_error": 7.377951226183329,
              "pct_error": 76.85365860607635
            }
          ]
        },
        {
          "k": 5,
          "features": [
            "ZN",
            "NOX",
            "DIS",
            "PTRATIO",
            "LSTAT"
          ],
          "rmse": 4.845105643412268,
          "mae": 3.4395102823137234,
          "r2": 0.6798876631728648,
          "adj_r2": 0.6632151456297848,
          "f_stat": 147.7551729120937,
          "f_pvalue": 2.2241773113177926e-88,
          "coefficients": [
            {
              "feature": "Intercept (\u03b2\u2080)",
              "coef": 70.81023589189664,
              "stderr": 3.8731402059323896,
              "tstat": 18.282383835069645,
              "pvalue": 1.2044165625509264e-54,
              "ci_lower": 63.195865634360004,
              "ci_upper": 78.42460614943327,
              "vif": null
            },
            {
              "feature": "ZN",
              "coef": 0.034575572176185114,
              "stderr": 0.01736070450931606,
              "tstat": 1.9915996011354986,
              "pvalue": 0.047098022968263695,
              "ci_lower": 0.0004454284072750586,
              "ci_upper": 0.06870571594509517,
              "vif": 2.1088293814067542
            },
            {
              "feature": "NOX",
              "coef": -19.024768387687374,
              "stderr": 4.049266135732161,
              "tstat": -4.698325017416383,
              "pvalue": 3.61854950948175e-06,
              "ci_lower": -26.98539206496705,
              "ci_upper": -11.064144710407696,
              "vif": 2.9651746302980837
            },
            {
              "feature": "DIS",
              "coef": -1.718517544594242,
              "stderr": 0.23794900762744742,
              "tstat": -7.222209336905051,
              "pvalue": 2.621041242517819e-12,
              "ci_lower": -2.1863115696371924,
              "ci_upper": -1.2507235195512918,
              "vif": 3.3569020463858874
            },
            {
              "feature": "PTRATIO",
              "coef": -1.1206327658514752,
              "stderr": 0.1423043807963294,
              "tstat": -7.874899982561751,
              "pvalue": 3.276721575077956e-14,
              "ci_lower": -1.4003949709462145,
              "ci_upper": -0.8408705607567358,
              "vif": 1.3129609668270046
            },
            {
              "feature": "LSTAT",
              "coef": -0.863279676273114,
              "stderr": 0.05132735623667368,
              "tstat": -16.819094914853533,
              "pvalue": 2.4343498958473155e-48,
              "ci_lower": -0.964186298276598,
              "ci_upper": -0.76237305426963,
              "vif": 1.738582185166892
            }
          ],
          "outliers": [
            {
              "rank": 1,
              "index": 371,
              "actual": 50.0,
              "predicted": 25.932650992798308,
              "residual": 24.067349007201692,
              "abs_error": 24.067349007201692,
              "pct_error": 48.134698014403384
            },
            {
              "rank": 2,
              "index": 412,
              "actual": 17.9,
              "predicted": 4.474340408195474,
              "residual": 13.425659591804525,
              "abs_error": 13.425659591804525,
              "pct_error": 75.00368487041634
            },
            {
              "rank": 3,
              "index": 195,
              "actual": 50.0,
              "predicted": 37.13990244070801,
              "residual": 12.860097559291987,
              "abs_error": 12.860097559291987,
              "pct_error": 25.720195118583973
            },
            {
              "rank": 4,
              "index": 204,
              "actual": 50.0,
              "predicted": 38.42378920359988,
              "residual": 11.576210796400119,
              "abs_error": 11.576210796400119,
              "pct_error": 23.152421592800238
            },
            {
              "rank": 5,
              "index": 203,
              "actual": 48.5,
              "predicted": 37.62093910466588,
              "residual": 10.87906089533412,
              "abs_error": 10.87906089533412,
              "pct_error": 22.431053392441484
            },
            {
              "rank": 6,
              "index": 0,
              "actual": 24.0,
              "predicted": 32.723719935733946,
              "residual": -8.723719935733946,
              "abs_error": 8.723719935733946,
              "pct_error": 36.34883306555811
            },
            {
              "rank": 7,
              "index": 55,
              "actual": 35.4,
              "predicted": 27.0980942975809,
              "residual": 8.301905702419099,
              "abs_error": 8.301905702419099,
              "pct_error": 23.451711023782764
            },
            {
              "rank": 8,
              "index": 473,
              "actual": 29.8,
              "predicted": 22.073572117609615,
              "residual": 7.726427882390386,
              "abs_error": 7.726427882390386,
              "pct_error": 25.9276103435919
            },
            {
              "rank": 9,
              "index": 414,
              "actual": 7.0,
              "predicted": 0.21556130800347262,
              "residual": 6.784438691996527,
              "abs_error": 6.784438691996527,
              "pct_error": 96.92055274280753
            },
            {
              "rank": 10,
              "index": 173,
              "actual": 23.6,
              "predicted": 30.153338849273,
              "residual": -6.553338849272997,
              "abs_error": 6.553338849272997,
              "pct_error": 27.768384954546594
            }
          ]
        }
      ]
    }
  }
};

// Default backward compatibility for 50 Startups
window.MODEL_DATA = window.MODEL_DATA_REGISTRY["50startups"]["models"];
