---
title: "5 Essential Python Libraries for Data Analysis"
pubDate: 2025-08-17
description: "A quick tour of the tools I reach for most often in analytics work."
tags: ["python","pandas","numpy"]
---

When I'm starting a new analysis, I usually set up a small toolkit:

1. **pandas** for tabular wrangling and joins.

2. **NumPy** for fast vectorized operations.

3. **Matplotlib** for baseline plotting.

4. **scikit-learn** for modeling and preprocessing.

5. **Polars** when data sizes grow and speed matters.


```python
import pandas as pd
import numpy as np

df = pd.DataFrame({"a":[1,2,3], "b":[10,20,30]})
df["c"] = np.log1p(df["b"])
print(df.describe())
```


Pick the simplest tool that solves the problem—optimize later.
