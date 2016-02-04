var express = require('express')
var router = express.Router();
var knex = require('../db/knex')
var config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost/bookapi',
  ssl: true
}

var Book = function(){
  return knex('book')
}

router.get('/', function(req, res){
  Book().select().then(function(books){
    res.json(books)

  })
})

router.get('/random', function(req, res){
  Book().select().then(function(books){

    res.json(books[Math.floor(Math.random()*books.length)])
  })
})

router.get('/randommultiple', function(req, res){
  Book().select().then(function(books){

    doubleFilter = function(object){
       if (object.winner.length>1){
         return true;
       }
     }
    var doubleBooks= books.filter(doubleFilter)
    res.json(doubleBooks[Math.floor(Math.random()*doubleBooks.length)])

  })
})

router.get('/:award', function(req, res){
  var award = []
  award.push(req.params.award);
  knex.raw("select * from book where winner @> '{"+req.params.award+"}'").then(function(books){
    res.json(books)
  })
})

module.exports = router;
