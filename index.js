const express = require('express');

const bodyParser = require('body-parser');

const { mongoose }  = require('./db.js');

var employeeController = require('./controllers/employeeController.js');

// var app = express();

var cors = require('cors');

var app = express();

app.use(cors());

app.options('*', cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });

app.all('/*', function( req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods",'GET, PUT , POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Content-type, Accept, X-Access-Token, X-Key');
    if(req.method == 'OPTIONS'){
        res.status(200).end();
    } else{
        next();
    }
})

  
app.listen( 3000, () => console.log('Server started at port : 3000'));

app.use('/employees/', employeeController);




