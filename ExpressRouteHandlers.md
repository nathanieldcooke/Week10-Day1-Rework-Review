1.

control + f : For example, when a client makes a GET request to your application by browsing to the URL http://localhost:8081/

we need to either update http://localhost:8081/ to be http://localhost:8081/text
OR 
we need to remove text from the route below that sentence

2. ALL CORRECTIONS HAVE BEEN MADE

Practice: Express Route Handlers 

    the function addArtist 
        1. need to update artist to artists.. or you get Reference Error. 
        2. need to add the artistId: key val pair to make request return value appear as expected.

    the function editArtistByArtistId
        1. need to update artist to artists.. or you get Reference Error. 

    the function addAlbumByArtistId
        1. need to add albumId to created album object, to match expected return value in reading.

    the function editAlbumByAlbumId
        1. need to update album to albums.. or you get Reference Error.

    Get all albums with names filtered by first letter
        couldn't get URL: /albums?startsWith={letter} to work, went with params method.

    the function addSongByAlbumId 
        1. needs data as second argument. 
        2. add albumId to created object, to match expected return value
    the function editSongBySongId 
        1. song needs to be songs.. or you get a Reference Error 
