const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

let app = express()
app.use(serveStatic(__dirname + '/dist'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'te-vk.herokuapp.com') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
