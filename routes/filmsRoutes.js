const express = require('express');

// Rutas de películas

const filmsController = require("../controllers/filmsController");
const filmsRouter = express.Router();


filmsRouter.get('/film/:title?', filmsController.getFilms);

filmsRouter.get('/', filmsController.renderForm)
filmsRouter.post('/', filmsController.postFilms);



module.exports = filmsRouter;