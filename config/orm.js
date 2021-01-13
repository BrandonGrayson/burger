const connection = require('./connection');

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })

    },
    insertOne: function (tableInput, cb) {
        
        const queryString =  `INSERT INTO burgers (burger_name) VALUES("${tableInput}")`
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        })
    }
    // updateOne()
};

module.exports = orm;
