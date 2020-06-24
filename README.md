## Capstone Project - Springboard Machine Learning Bootcamp, 2020

### **Predicting the All-NBA team, ROTY, and MVP using historical data and Machine Learning**

**Author:** Ben Basuni

**Key Question:** Can we use historic NBA data and machine learning to predict if a player will make it to the current year's All-NBA Team, be Rookie of the Year or NBA MVP?

### Project Overview

* **Background**: NBA games produce a wide array of statistical data to be analyzed.   
We will be using this data to take a statistical viewpoint of an NBA player using an algorithm. 

* **Problem Statement:** There is always a wide discussion involving which player should be MVP or who should make the All-NBA team, 
but despite people's opinions, data is a fact. 
* **Datasets & Input**:
https://www.kaggle.com/drgilermo/nba-players-stats

* **Solution Statement:**
The problem to predict the All-NBA Team, Rookie of the Year, and NBA MVP is a **classification** problem.
We will take existing data and input, and give a 1 or 0 value determining whether or not a player has received any of the awards.
This mimicks an NBA Sports Analysis that heavily uses statistics to cast his vote. 
* **Benchmark Model:**
Default SciKit-Learn Logistic Regression, RandomForestClassifier, and RandomForestRegressor will be used as a benchmark/baseline.
Several models will then be explored to improve over the benchmark including other ensemble and tree-based models, Support-Vector Machines (SVM), XGBoost.

* **Evaluation Metrics:** Recall and F1-score will be used for classification while R-squared and RMSE will be used for the regression part of the combined model

### Requirements: Software and Libraries used

### How to Run
`pip3 install -r requirements.txt`
