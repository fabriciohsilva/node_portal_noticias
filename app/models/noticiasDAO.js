function NoticiasDAO(connection){
    this._connection = connection;
}//end function Noticias()

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc;', callback);
}//end Noticias.prototype.getNoticias

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}//end Noticias.prototype.getNoticia

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback);
}//end Noticias.prototype.salvarNoticia

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}//end NoticiasDAO.prototype.get5UltimasNoticias

module.exports = function(){
   return NoticiasDAO;
}//end module.exports = function()