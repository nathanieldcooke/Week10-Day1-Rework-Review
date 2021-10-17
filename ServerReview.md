1.

Server Review
    > Get https://api.publicapis.org/entries
    returns an error: SSL Error: Certificate has expired
    once I disable SSL, then request returns expected values


2.

Practice Postman Review 
    Might want to warn students to do http not https
    If they get an 
        Localhost sent an invalid response for my angular app
        OR
        Could not get response: Error: write EPROTO 140406339848456:error:100000f7:SSL routines:OPENSSL_internal:WRONG_VERSION_NUMBER:../../third_party/boringssl/src/ssl/tls_record.cc:24


3.

Route to edit post, doesn't edit post:

app.get('/posts/:postId/edit', (req, res) => {
    const postId = req.params.postId;
    const post = posts[postId];

    if (!post) throw new NotFoundError('Post not found');

    const data = {
        post
    };

    res.render('edit-post', data);
});