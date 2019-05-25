var mysql = require('mysql');

function createConnection(){
    var connection = mysql.createConnection({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'hao13795296861',
        database:'my_blog'
    });
    return connection;
}

module.exports.createConnection = createConnection;
<<<<<<< HEAD

=======
>>>>>>> 50ef39f2db3add614d4ffc4a502202ffa762ca02
