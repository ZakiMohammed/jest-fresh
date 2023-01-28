const post = require('./post');

(async () => {
  const posts = await post.getAll();
  console.log(posts);
})();
