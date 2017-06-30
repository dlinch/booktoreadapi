var express = require('express')
var router = express.Router();
var knex = require('../db/knex')
var titleize = require('titleize');

require('dotenv').load()

var config = {
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://localhost/bookapi',
  ssl: true,
}

var Book = function(){
  return knex('book')
}

router.get('/all', function(req, res){
  Book().select().then(function(books){
    res.json(books)
  })
})

router.get('/random', function(req, res){
  Book().select().then(function(books){
    res.json(books[Math.floor(Math.random()*books.length)])
  })
})

router.get('/multiple/random', function(req, res){
  Book().select().then(function(books){

    filteredBooks = books.filter((book) => {
      if(book.winner.length > 1) return true;
    })
    res.json(filteredBooks[Math.floor(Math.random()*filteredBooks.length)])
  })
})

router.get('/multiple', function(req, res) {
  Book().select()
  .then(function(books){
    filteredBooks = books.filter((book) => {
      if(book.winner.length > 1) return true;
    })
    res.json(filteredBooks)
  })
})

router.get('/author', function(req, res) {
  search = req.query.name
  knex.raw(`select * from book where author_first ~* '${search}' or author_last ~* '${search}'`)
  .then(function(books) {
    res.json(books.rows)
  })
})

router.get('/award/:award', function(req, res){
  knex.raw(`select * from book where winner @> '{${titleize(req.params.award)}}'`)
  .then(function(books){
    res.json(books)
  })
})

router.get('/year/:year', function(req, res){
  console.log(req.params.year)
  Book().where({year: req.params.year}).select()
  .then(function(books){
    res.json(books)
  })
})

module.exports = router;
