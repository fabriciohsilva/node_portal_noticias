module.exports.index = function(app, req, res) {
    
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.get5UltimasNoticias( function(error, result){
        res.render('home/index', {noticias : result});
    });//end noticiasModel.get5UltimasNoticias


    
        
}//end module.exports.index = function()