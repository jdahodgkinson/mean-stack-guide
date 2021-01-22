const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'lskdjf', title: 'First Post', string: 'From the server...' },
    { id: 'iasjds', title: 'Second Post', string: 'From the server too...' }
  ];
  return res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
