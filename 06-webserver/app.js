require('dotenv').config()
const express = require('express')
var hbs = require('hbs');



const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));

const per = {
    nombre: "Oscar Cordero",
    titulo: "Curso de Node"
}

app.get('/', (req, res) => {
    res.render('home', per);
});


app.get('/generic', (req, res) => {
    res.render('generic', per);
});

app.get('/elements', (req, res) => {
    res.render('elements', per);
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hello World')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})