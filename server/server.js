const hbs = require('hbs');
const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(publicPath));
//app.render('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log(publicPath);