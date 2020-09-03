import axios from "axios";

export const getAllArticles = (topic) => {
  return axios
    .get("https://h-e-r-o-i-k.herokuapp.com/api/articles", {
      params: { topic },
    })
    .then((res) => {
      const { articles } = res.data;
      return articles;
    });
};

export const getArticle = (article_id) => {
  return axios
    .get(`https://h-e-r-o-i-k.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      const { article } = res.data;
      return article;
    });
};

export const getAllTopics = () => {
  return axios
    .get("https://h-e-r-o-i-k.herokuapp.com/api/topics")
    .then((res) => {
      const { topics } = res.data;
      return topics;
    });
};
export const getComments = (article_id) => {
  return axios
    .get(
      `https://h-e-r-o-i-k.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then((res) => {
      console.log("in getComments = ", res.data);
      return res.data;
    });
};
