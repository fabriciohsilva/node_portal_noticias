module.exports.noticias = function(app, req, res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function(err, result){
        res.render('noticias/noticias', {noticias : result});
    });//end noticiasModel.getNoticias(function(err, result)

}//end module.exports.noticias = function(app, req, res) 


module.exports.noticia = function(app, req, res) {

    var connection = app.config.dbConnection();    
    var noticiasModel = new app.app.models.noticiasDAO(connection);
    
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(err, result){
        res.render('noticias/noticia', {noticia : result});
    });//end connection.query

}//end module.exports.noticia = function(app, req, res) 