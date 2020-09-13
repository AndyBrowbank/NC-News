import axios from "axios";

export const getAllArticles = (topic, sort_by, order) => {
  return axios
    .get("https://h-e-r-o-i-k.herokuapp.com/api/articles", {
      params: { topic, sort_by, order },
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
      return res.data;
    });
};
export const postComment = (comment, article_id, user) => {
  return axios
    .post(
      `https://h-e-r-o-i-k.herokuapp.com/api/articles/${article_id}/comments`,
      { username: user, body: comment }
    )
    .then((res) => {
      return res.data.comment;
    });
};
export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://h-e-r-o-i-k.herokuapp.com/api/comments/${comment_id}`
  );
};

export const articleVote = (article_id, inc_votes) => {
  return axios.patch(
    `https://h-e-r-o-i-k.herokuapp.com/api/articles/${article_id}`,
    {
      inc_votes,
    }
  );
};

export const commentVote = (comment_id, inc_votes) => {
  return axios.patch(
    `https://h-e-r-o-i-k.herokuapp.com/api/comments/${comment_id}`,
    {
      inc_votes,
    }
  );
};
