const { request } = require('express');
const express = require('express');

const routes = express.Router();
const connection = require('./database/connection');


routes.post('/new_plant', async (request, response) =>{
    const { species, watering_date, humidity_level, acquisition_date, locate } = request.body;

    console.log(species);

    await connection('plant').insert({
        species,
        locate,
        humidity_level,
        watering_date,
        acquisition_date
    })

    return response.json({ species });
});

routes.get('/list_plants', async (request, response) => {

    const plants = await connection('plant').select('*');

    return response.json(plants);
});

module.exports = routes;