const express = require('express');
const router = express.Router();
let data = require('../data/data.json');
router.get('/', (req, res) => {
  albumPhotos = [];
  albumNames = [];
  urlNames = [];

  data.albums.forEach(albumObj => {
    albumPhotos = albumPhotos.concat(albumObj.coverImage);
    albumNames = albumNames.concat(albumObj.albumName);
    urlNames = urlNames.concat(albumObj.shortName);
  });

  res.render('index.ejs', {
    coverImage: albumPhotos,
    allAlbums: albumNames,
    urls: urlNames
  });
});

module.exports = router;
