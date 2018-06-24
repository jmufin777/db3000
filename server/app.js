//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const { sequelize } = require('./models');
const config = require('./config/config')

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

//http.createServer(req,)

require('./routes2')(app)

// sequelize.sync()
//     .then(() => {
//         app.listen(config.port )
//         //=> console.log(`Port ${port}`));
//         console.log(`server started on ${config.port}`)

//     })

app.listen(config.port )
console.log(`I'm listening on port ${config.port}`)

module.exports = app;