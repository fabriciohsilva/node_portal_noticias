module.exports.formulario_inclusao_noticia = function(app, req, res) {

    res.render('admin/form_add_noticia', {validacao : {}, noticia : {} });    
    
}//end module.exports.formulario_inclusao_noticia = function()


module.exports.noticias_salvar = function(app, req, res) {
    
    var noticia = req.body;

    //validando os campos
    req.assert('titulo', 'O Título é obrigatório!').notEmpty();
    req.assert('resumo', 'O Resumo deve ter de 10 a 100 caracteres!').len(10, 100);
    req.assert('autor', 'O Autor é obrigatório!').notEmpty();
    req.assert('data_noticia', 'A data é obrigatória!').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'A Notícia é obrigatória!').notEmpty();
      var erros = req.validationErrors();
    //tratamento de erros
    if(erros){
        res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia });
        return;
    }//end if(erros)
    //conexão
    var connection = app.config.dbConnection();    
    //model
    var noticiasModel = new app.app.models.noticiasDAO(connection);
    //salvarNoticia
    noticiasModel.salvarNoticia(noticia, function(err, result){
        res.redirect('/noticias');
    });//end connection.query

}//end module.exports.noticias_salvar = function() 