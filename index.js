require('dotenv').config() // kegunaan untuk membaca file .env
const express = require('express') // inisiasi variable yang berisi express
const port = process.env.PORT || 3500 // declare port dr env || 3500
const app = express() // inisiasi function express ke variable app
const cors = require('cors') // inisiasi variable yang berisi cors
const bodyParser = require('body-parser') // inisiasi variable yang berisi body parser
const router = require('./router') // inisiasi variable yang berisi router dari folder router
const YAML = require('yamljs'); //inisiasi variable yang berisi package yamljs
const swaggerUI = require('swagger-ui-express'); // inisiasi variable yang berisi swagger ui express
const apiDocs = YAML.load('./api-doc.yaml'); // inisiasi variable yang berisi file api-doc.yaml
 
app.use(cors()) // gunakan fungsi cors
app.use(express.urlencoded({ extended: true })) // berguna untuk menerima request form-data dan urlencode form
app.use(bodyParser.json()) // gunakan fungsi json dari body parser (berguna untuk menangkap json request)
app.use('/api', router) //implementasi kan router nya dengan /api
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocs)); // implementasi kan router swagger

app.listen(port, () => {
    console.log(`server running at port ${port}`)
}) // fungsi untuk inisiasi http server pada port yang telah di tentukan

