var mysql = require('mysql');

var connMySQL = function () {
  console.log('Conexão criada com o mysql');

  return mysql.createConnection({
    connectionLimit: 10,
    host : 'localhost',
    user : 'root',
    password: 'password',
    database : 'portal_noticias'
  });

}

module.exports = function (){
  console.log('O Autoload carregou os arquivos de conexão');
  return connMySQL;
}