const express = require('express');
const router = express.Router();
let data = require('../data/data.json');
router.get('/', (req, res) => {
  res.render('index.ejs');
});
console.log(data.albums);
module.exports = router;
