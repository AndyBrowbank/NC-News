import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://h-e-r-o-i-k.herokuapp.com/api/articles")
    .then((res) => {
      const { articles } = res.data;
      return articles;
    });
};

export const getArticle = (article_id) => {
  return axios
    .get(
      `https://h-e-r-o-i-k.herokuapp.com/api/articles/articles/${article_id}`
    )
    .then((res) => {
      const { article } = res.data;
      return article;
    });
};
