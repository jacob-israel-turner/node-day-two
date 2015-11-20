var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
const port = 9001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
  res.json('Helloooo!');
});

app.get('/smurfs/:id', function(req, res){
  console.log(req.params);
  console.log(req.query.age);
})

app.post('/', function(req, res){
  console.log(req.body);
  res.json(req.body);
})

app.listen(port, function(e){
  if(e) return console.error(e);
  console.log(`Now listening on port ${port}`);
})
