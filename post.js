const axios = require('axios').default;

const getAll = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
};

module.exports = {
  getAll,
};
