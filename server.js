var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www')
const PORT = process.env.PORT || 8080 || 5000 || 3000

var __path = process.cwd()

const app = express()
app.use(cors())
app.use(secure)

app.get('/', function(req, res) {
    console.log(req.rawHeaders[0])
    res.sendFile(__path + '/index.html')
})

app.listen(PORT, () => {
    console.log('Server is Running !!! at Port ' + PORT)
})