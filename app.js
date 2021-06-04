const express = require('express');

const app = express();

const port = 3030;

const path = require('path');

const views = path.join(__dirname,'views');

app.use (express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(views,'index.html')));
app.get('/goro', (req, res) => res.sendFile(path.join(views,'goro.html')));
app.get('/jax', (req, res) => res.sendFile(path.join(views,'jax.html')));
app.get('/liu-kang', (req, res) => res.sendFile(path.join(views,'liu-kang.html')));
app.get('/raiden', (req, res) => res.sendFile(path.join(views,'raiden.html')));
app.get('/scorpion', (req, res) => res.sendFile(path.join(views,'scorpion.html')));
app.get('/sonya', (req, res) => res.sendFile(path.join(views,'sonya.html')));
app.get('/sub-zero', (req, res) => res.sendFile(path.join(views,'sub-zero.html')));


app.listen(port, () => console.log('Servidor corriendo en el puerto' + port))