
var express = require('express')

var app = express()
var db = require('./db');
// var cors = require('cors');
// app.use(cors());
var userController = require('./user/userController');
app.use('/users', userController);

module.exports = app;
// app.get('/notes', function(req, res) {
//   var id = req.query.id;
//   console.log(id);
//   res.json({notes: "This is your notebook. Edit this to start saving your notes!"+id})
  
// })

// app.listen(3000)
