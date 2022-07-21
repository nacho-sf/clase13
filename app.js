// Módulos externos
const express = require("express");
const app = express();
const port = 3000;

// Rutas de películas
const filmRoutes = require("./routes/filmsRoutes");

// Motor de vistas PUG
app.set('view engine', 'pug');
app.set('views', './views');


// Informar al servidor el formato
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', filmRoutes);



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});