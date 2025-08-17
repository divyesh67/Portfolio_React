---
title: "Customer Churn Prediction Model"
summary: "A production-ready binary classifier predicting churn risk for subscription customers."
date: 2025-08-17
tags: ["Python","Machine Learning","scikit-learn"]
---

### Problem
Reducing churn has outsized impact on revenue. The goal was to identify at-risk users early and trigger targeted retention actions.

### Approach
- Built an end-to-end pipeline: feature engineering (RFM metrics, tenure, usage), model training with **scikit‑learn** (Logistic Regression, XGBoost baseline), and cross-validation.
- Imbalanced data handled with class weighting and threshold tuning.
- Explainability via permutation importance and SHAP-style insights.

### Results
AUC improved from 0.69 to **0.82**; recall at chosen threshold increased by **17%**. Deployed as a batch job scoring users nightly and feeding a CRM playbook.

### Next Steps
Calibrate probabilities per segment, add uplift modeling for offer optimization, and introduce cost-sensitive evaluation.
