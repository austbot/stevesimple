var express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/stuff/:number', (req, res) => {
    res.send(`https://picsum.photos/200/300/?image=${req.params.number}`);
});

app.listen(8001, () => console.log('Example app listening on port 8001!'));