const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    
    // Your port; if not 3306
    port: process.env.PORT || 8080,
    
    // Your username
    user: "root",
    
    // Your password
    password: "Prolific1",
    database: "burger_DB"
});
    
    connection.connect(function(err) {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
    });


module.exports = connection 

