import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://h-e-r-o-i-k.herokuapp.com/api/articles")
    .then((res) => {
      const { articles } = res.data;
      return articles;
    });
};
