// Inside burger.js, import orm.js into burger.js
const orm = require('../config/orm');


//mmodel for4 a burger that has data about the burger and maybe functions to act on that data

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function(data, cb) {
        console.log('DATA sent from burger.js---> ', data)
        orm.insertOne(data, function(res) {
            console.log('res sent from burger.js---> ', res)
            cb(res)
        })
    }
};

// Export at the end of the burger.js file.
module.exports = burger;