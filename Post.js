var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.post('/',function (req, res) {
    console.log(req.body);
    res.send('RRR');
});
app.listen(3000);