const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {

  console.log('Server running on port 3000')

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.post('/login', (req, res) => {
    console.log('req.body: ', req.body)

  })
})