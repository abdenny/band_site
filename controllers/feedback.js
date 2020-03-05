// purpose is to render the form

const express = require('express');
const router = express.Router();

router.get('/feedback', (req, res) => {
  res.render('feedback.ejs', {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });
});
module.exports = router;
