const express = require('express');
const PlantController = require('./controllers/PlantController');

const routes = express.Router();


routes.post('/new_plant', PlantController.create);

routes.get('/list_plants', PlantController.list);

module.exports = routes;