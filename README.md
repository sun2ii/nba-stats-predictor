## Capstone Project - Springboard Machine Learning Bootcamp, 2020

### **Predicting an NBA's team Points per Game based on other features**

**Author:** Ben Basuni

**Key Question:** Can we use historic NBA data and machine learning to predict a team's total points for that game?

### Project Overview

* **Background**: NBA games produce a wide array of statistical data to be analyzed.   
We will be using this data to take a statistical viewpoint of an NBA team and how many points a team will make.

* **Datasets & Input**:
https://www.kaggle.com/drgilermo/nba-players-stats

* **Solution Statement:**
The problem to predict the total points in a game given other features is a **regression** problem.
We will take existing data and input, and do some data manipulation and see if we can come up with statistical data that .
This mimicks an NBA Sports Analysis that heavily uses statistics to cast his vote. 

* **Benchmark Model:**
Default SciKit-Learn Logistic Regression, RandomForestRegressor, and a Neural Network will be used as a benchmark/baseline.
Several models will then be explored to improve over the benchmark including other ensemble and tree-based models, Support-Vector Machines (SVM), XGBoost.

* **Evaluation Metrics:** R-squared and RMSE will be used for the regression part of the model

### Requirements: Software and Libraries used

### How to Run
`pip3 install -r requirements.txt`
