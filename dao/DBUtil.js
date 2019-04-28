var mysql = require('mysql');

function createConnection(){
    var connection = mysql.createConnection({
        host:'192.168.0.101',
        port:'3306',
        user:'root',
        password:'hao13795296861',
        database:'my_blog'
    });
    return connection;
}

module.exports.createConnection = createConnection;