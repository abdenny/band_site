const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
let feedbackData = require('../data/feedback.json');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/api', (req, res) => {
  res.json(feedbackData);
});

router.post('/api', (req, res) => {
  feedbackData.unshift(req.body);
  fs.writeFile(
    'data/feedback.json',
    JSON.stringify(feedbackData),
    'utf8',
    err => {
      if (err) {
        console.log(err);
      }
      console.log(req.body);
      res.json(feedbackData);
    }
  );

  console.log(req.body);
});

router.delete('/api/:id', (req, res) => {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile(
    'data/feedback.json',
    JSON.stringify(feedbackData),
    'utf8',
    err => {
      if (err) {
        console.log(err);
      }
      res.json(feedbackData);
    }
  );
});

module.exports = router;
