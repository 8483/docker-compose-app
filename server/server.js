const express = require('express')
const bodyParser = require("body-parser");
const app = express()

// Allow requests from all domains and localhost
app.all("/*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

var data = ["apple", "orange", "banana"];

app
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .get('/', function (req, res) {
      res.json(data)
    })
;

app.listen(3000);
