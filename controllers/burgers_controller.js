const express = require('express')
const connection = require('../config/connection')
const burger = require('../models/burger')
const burgerJS = require('../models/burger')

const router = express.Router()

// Create the router for the app, and export the router at the end of your file.
module.exports = router

router.get("/", function (req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject)
  })
});


router.post("/api/burgers", function (req, res) {

  // take the data the request is sent with to 

  // the server

  // render the page with the new results
  console.log(req.body)
  var newBurger = req.body.data

  burger.insertOne(newBurger, function(data) {
    console.log(data)
    
  })
})

router.put("/api/:table/:id", function (req, res) {
  console.log(req.params.table)
  console.log(req.params.id)
  const table = req.params.table
  const id = req.params.id
  burger.updateOne(table, id, function(data) {
    console.log(data)
  })
})


//REQUEST
//req.body
//req.params
//req.query

//RESPONSE
//res.json()
//res.redirect()
//res.render() 
//res.send() 
//res.sendFile()
//res.status()