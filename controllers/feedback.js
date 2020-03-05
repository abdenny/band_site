const express = require('express');
const router = express.Router();
let data = require('../data/data.json');

router.get('/feedback', (req, res) => {
  res.render('feedback.ejs');
});
module.exports = router;
