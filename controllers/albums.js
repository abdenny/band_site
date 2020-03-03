const express = require('express');
const router = express.Router();
let data = require('../data/data.json');
router.get('/albums', (req, res) => {
  res.render('albums.ejs');
});
module.exports = router;
