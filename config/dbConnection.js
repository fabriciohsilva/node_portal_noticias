//importando o mysql
var mysql = require('mysql');

var connMySQL = function(){
    
    return connection = mysql.createConnection({
        host: 'localhost'
    ,   user: 'root'
    ,   password: 'Final4265'
    ,   database: 'portal_noticias'
    });//end mysql.createConnection

};//end connMySQL = function()

module.exports = function(){
    return connMySQL;
}//end module.exports =  = function()