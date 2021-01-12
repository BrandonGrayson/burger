const express = require('express')
const connection = require('../config/connection')
const burgerJS = require('../models/burger')

const router = express.Router()

// Create the router for the app, and export the router at the end of your file.
module.exports = router

router.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
    
        // Test it
        // console.log('The solution is: ', data);
    
        // Test it
        // return res.send(data);
    
        res.render("index", { burgers: data });
      });
})