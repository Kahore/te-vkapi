const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

let app = express()
app.use(serveStatic(__dirname + '/dist'))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'te-vk.herokuapp.com')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
