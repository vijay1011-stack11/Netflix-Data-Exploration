export interface GraphItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const graphs: GraphItem[] = [
  { id: 1, title: "Movies vs TV Shows", description: "Distribution of Movies vs TV Shows on Netflix", image: "/images/plot1_content_type.png" },
  { id: 2, title: "Top 10 Countries", description: "Countries producing the most Netflix content", image: "/images/plot2_top_countries.png" },
  { id: 3, title: "Content Per Year", description: "How Netflix content grew year by year", image: "/images/plot3_content_per_year.png" },
  { id: 4, title: "Top 10 Genres", description: "Most popular genres on Netflix", image: "/images/plot4_top_genres.png" },
  { id: 5, title: "Rating Distribution", description: "Age rating breakdown of all content", image: "/images/plot5_rating_distribution.png" },
  { id: 6, title: "Word Cloud", description: "Most frequently used words in Netflix titles", image: "/images/plot6_wordcloud_titles.png" },
  { id: 7, title: "Top 10 Directors", description: "Directors with the most titles on Netflix", image: "/images/plot7_top_directors.png" },
  { id: 8, title: "Top 10 Actors", description: "Actors appearing most across Netflix content", image: "/images/plot8_top_actors.png" },
  { id: 9, title: "Month-Year Heatmap", description: "Monthly content upload patterns across years", image: "/images/plot9_heatmap_month_year.png" },
  { id: 10, title: "NLP Common Words", description: "Most common words in Netflix show descriptions", image: "/images/plot10_nlp_common_words.png" },
  { id: 11, title: "YoY Growth Rate", description: "Year-over-year content growth rate trend", image: "/images/plot11_yoy_growth.png" },
];
