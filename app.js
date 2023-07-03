const express = require('express')
const app = express()

// Make everything inside of public/ available
app.use(express.static('public'));

app.get('/', (request, response) => {})

app.get('/home', (request, response) => {
    console.log('homepage reached');
    response.sendFile(__dirname + '/views/homepage.html');
})

app.get('/about', (request, response) => {
    console.log('About page reached');
    response.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (request, response) => {
    console.log('Works page reached');
    response.sendFile(__dirname + '/views/works.html');
})

app.get('/gallery', (request, response) => {
    console.log('Gallery reached');
    response.sendFile(__dirname + '/views/gallery.html');
})

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));