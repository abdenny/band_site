const express = require('express');
const router = express.Router();
let data = require('../data/data.json');

router.get('/albums/:albumid', (req, res) => {
  let albumTracks = [];
  let pageAlbum = [];

  data.albums.forEach(albumObj => {
    if (albumObj.shortName == req.params.albumid) {
      pageAlbum.push(albumObj);
      albumTracks = albumObj.songlist;
    }
  });

  res.render('albums.ejs', {
    image: pageAlbum[0].coverImage,
    release: pageAlbum[0].releaseDate,
    name: pageAlbum[0].albumName,
    sum: pageAlbum[0].summary,
    tracks: albumTracks
  });
});
module.exports = router;
