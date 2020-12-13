const express = require('express');

const routes = express.Router();


routes.post('/users', (request, responsee) =>{
    const body = request.body;
    console.log(body);

    return responsee.json({teste: "testando"});
});

module.exports = routes;