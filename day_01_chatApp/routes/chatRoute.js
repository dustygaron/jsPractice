const express = require('express')
const connectdb = require('../dbconnect')
const Chats = require('./../models/Chat')

const router = express.Router()

router.route('/').get((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200

  // Query the db and fetch all messages in chat collection
  connectdb.then(db => {
    Chats.find({}).then(chat => {
      res.json(chat)
    })
  })
})

module.exports = router