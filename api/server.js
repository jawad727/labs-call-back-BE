const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const formRoutes = require("../config/confirmation/form-router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
        <h1>Api Portal</h1>
    `)
})


server.use('/api/routes', formRoutes)


module.exports = server;
