---
title: "Retail Demand Forecasting with Time Series"
summary: "Multi-store, multi-SKU demand forecasting with hierarchical reconciliation."
date: 2025-08-17
tags: ["Python","Time Series","Forecasting"]
---

### Problem
Stockouts and overstock were frequent due to seasonality and promotions.

### Approach
- Built a modular pipeline with feature stores for calendar events and promos.
- Benchmarked ARIMA/ETS vs. tree-based regressors with lag features; evaluated with rolling-origin validation.
- Aggregated forecasts with hierarchical reconciliation to align SKU → category → store totals.

### Results
sMAPE reduced by **14%** overall; promo weeks improved by **22%**. Scenario planning enabled better buy decisions.

### Next Steps
Add probabilistic forecasts and propagate uncertainty into replenishment.
