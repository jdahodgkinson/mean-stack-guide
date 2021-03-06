const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/posts', (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: 'Post added successfully.'
  });
});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'lskdjf', title: 'First Post', content: 'From the server...' },
    { id: 'iasjds', title: 'Second Post', content: 'From the server too...' }
  ];
  return res.status(200).json({
    message: 'Posts fetched successfully.',
    posts: posts
  });
});

module.exports = app;
