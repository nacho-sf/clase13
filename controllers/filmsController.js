const fetch =  require("node-fetch");
const apiKey = "fac26ab8";


const getFilms = async (req, res) => {
    if (req.params.title) {
        try {
            let response = await fetch(`https://www.omdbapi.com/?t=${req.params.title}&apikey=${"fac26ab8"}`);
            let films = await response.json();
            res.render('film.pug', { "film":films }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).render('film.pug', { "film": [] });
        }
    }
}

const renderForm = (req,res) => {
    res.render('home')
}

const postFilms = (req,res) => {
    console.log(req.body.film);
    res.redirect(`http://localhost:3000/film/${req.body.film}`)
}


module.exports = {
    getFilms,
    postFilms,
    renderForm
    }



