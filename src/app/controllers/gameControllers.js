class gameControllers{

    //get - game
    index(req, res){
        res.render('game')
    }

    show(req, res){
        res.send('new games')
    }
}

module.exports = new gameControllers