//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const routes = require('./routes');

const app=express();
app.use(morgan('combined'));
app.use(cors());

app.use(bodyParser.json());
app.use('/',routes);

app.use((err, req, res, next) =>{
    res.json(err);
});
//const app = require('../app');
const port = 3003;
//http.createServer(req,)
app.post('/register', (req, res)=>{
    res.send({
        message: `Jsi ${req.body.email} happy and registered `
    });
});

app.listen(port,()=> console.log(`Port ${port}`));

module.exports = app;