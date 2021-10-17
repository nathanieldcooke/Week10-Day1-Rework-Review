// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json());


// app.use((req, res, next) => {
//   console.log('Body:', req.body);
//   next();
// });


app.get('/artists/:id', (req, res, next) => {
  const { id } = req.params 
  const artist = getArtistByArtistId(id)
  res.json(artist)
})

app.post('/artists', (req, res, next) => {
  // console.log(req.p)
  const artist = addArtist(req.body)
  // res.redirect(`/artists/${}`)
  res.json(artist)
})

app.put('/artists/:artistId', (req, res, next) => {
  const { artistId } = req.params
  const edited = editArtistByArtistId(artistId, req.body)
  res.json(edited)
})

app.delete('/artists/:artistId', (req, res, next) => {
  const { artistId } = req.params

  deleteArtistByArtistId(artistId)

  res.json({
    message: "Successfully deleted"
  })
})


app.get('/artists/:artistId(\\d+)/albums', (req, res, next) => {
  const { artistId } = req.params;
  const albums = getAlbumsByArtistId(artistId)
  res.json(albums)
})

app.get('/artists/latest/albums', (req, res, next) => {
  // const { artistId } = req.params;
  const albums = getAlbumsForLatestArtist()
  console.log('hello')
  res.json(albums)
})


app.get('/albums/:albumId(\\d+)', (req, res, next) => {
  const albumId = req.params.albumId
  const AlbumAndSongs = getAlbumByAlbumId(albumId)
  res.json(AlbumAndSongs)
})

app.post('/artist/:artistId/albums', (req, res, next) => {
  const artistId = req.params.artistId
  const data = req.body
  const response = addAlbumByArtistId(artistId, data)
  res.json(response)
})

app.post('/albums/:albumId(\\d+)', (req, res, next) => {
  const albumId = req.params.albumId
  const data = req.body
  const response = editAlbumByAlbumId(albumId, data)
  res.json(response)
})

app.delete('/albums/:albumId(\\d+)', (req, res, next) => {
  const albumId = req.params.albumId
  deleteAlbumByAlbumId(albumId)
  res.json({
    "message": "Successfully deleted"
  })
})

app.get('/albums/:letter', (req, res, next) => {
  const { letter } = req.params
  const result = getFilteredAlbums(letter)
  res.json(result)
})


app.get('/artists/:artistId/songs', (req, res, next) => {
  const { artistId } = req.params

  const songs = getSongsByArtistId(artistId)

  res.json(songs)
})

app.get('/songs/:songId', (req, res, next) => {
  const {songId} = req.params

  const song = getSongBySongId(songId)

  res.json(song)
})

app.post('/albums/:albumId/songs', (req, res, next) => {
  const { albumId } = req.params
  const data = req.body

  const addedSong = addSongByAlbumId(albumId, data)

  res.json(addedSong)
})

app.put('/songs/:songId',(req, res) => {
  const { songId } = req.params
  const data = req.body

  const editSong = editSongBySongId(songId, data)

  res.json(editSong)
})

app.delete('/songs/:songId', (req, res) => {
  const { songId } = req.params

  deleteSongBySongId(songId)

  res.json({
    "message": "Successfully deleted"
  })
})

const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));