const gameRouter = require('./games')
const siteRouter = require('./site')

function route(app){

    app.use('/game', gameRouter)
    app.use('/', siteRouter)
    
}

module.exports = route