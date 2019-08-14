var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var data =[];

app.get('/get', function (req, res) {
  console.log('get data');
  res.send(data);
});

app.post('/add', function (req, res) {
    console.log('add data');
    req.body.id = data.length +1;
    console.log(">>" + req.body.name);
    data.push(req.body);
    res.send(data);
});

app.post('/posturl', function (req, res) {
	var json = req.body;
	res.send('Add new ' + json.name + ' Completed!');
});

app.put('/edit', function (req, res) {
  if(req.body.id)
    data[req.body.id-1] = req.body;
  console.log("edit data!");
  res.send(data);
});

app.delete('/delete', function (req, res) {
  if(req.body.id)
    data.splice(req.body.id-1,1);
  console.log("delete data!");
  res.send(data);
});

app.listen(3000);
console.log("My Service is listening to port 3000.");