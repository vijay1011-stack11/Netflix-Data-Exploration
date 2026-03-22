# 🎬 Netflix Data Exploration Dashboard

A Netflix-themed interactive data science dashboard analyzing 8,800+ Netflix titles using Python, deployed as a React web app.

🔗 **Live Demo:** [netflix-peek-data.lovable.app](https://netflix-peek-data.lovable.app)

---

## 📊 Visualizations (11 Charts)

| # | Chart | Description |
|---|-------|-------------|
| 1 | Movies vs TV Shows | Distribution of content types |
| 2 | Top 10 Countries | Countries producing the most content |
| 3 | Content Per Year | Year-by-year growth of Netflix content |
| 4 | Top 10 Genres | Most popular genres |
| 5 | Rating Distribution | Age rating breakdown |
| 6 | Word Cloud | Most used words in Netflix titles |
| 7 | Top 10 Directors | Directors with the most titles |
| 8 | Top 10 Actors | Most appearing actors |
| 9 | Month-Year Heatmap | Monthly upload patterns across years |
| 10 | NLP Common Words | Common words in descriptions via CountVectorizer |
| 11 | YoY Growth Rate | Year-over-year content growth trend |

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| Data Analysis | Python, Pandas, Matplotlib, Seaborn |
| NLP | Scikit-learn (CountVectorizer), WordCloud |
| Frontend | React, Tailwind CSS |
| Deployment | Lovable, Vercel |

---

## 📁 How to Run Locally

### 1. Generate the plots
```bash
pip install pandas matplotlib seaborn wordcloud scikit-learn
python netflix_analysis.py
```

### 2. Dataset
Download from Kaggle: [Netflix Movies and TV Shows](https://www.kaggle.com/datasets/shivamb/netflix-shows)
Place `netflix_titles.csv` in the same folder as `netflix_analysis.py`

---

## 👤 Author
**Vijay** — B.Tech CSE, SRMIST Ramapuram
