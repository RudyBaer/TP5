var express = require('express');
var bodyParser = require("body-parser");
var app = express();



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");

    next();
});


app.use('/', express.static(__dirname));


var router = express.Router();


app.use('/api', router);

app.listen(3000);