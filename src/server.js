const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const route = require('./routers/index')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//routes_init khoi tao tuyen duong 
 route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})