const app = require('express')()
const path = require('path')

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/googleMap.html'))
})

app.listen(2222, function () {
  console.log('server in running on http://localhost:2222')
})
