const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

var corsOptions = {
  origin: process.env['SERVER']
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var assetsPath = path.resolve(__dirname, 'front', 'assets'); //path.join(__dirname, 'public'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(assetsPath));


// routes backend
require('./app/routes/auth')(app);
require('./app/routes/user')(app);
require('./app/routes/role')(app);
require('./app/routes/type_document')(app);
require('./app/routes/type_identity_document')(app);
require('./app/routes/culqi')(app);
require('./app/routes/product')(app);
require('./app/routes/category')(app);
// API MIS COMPRAS
require('./app/routes/sale')(app);

// routes frontend
require('./front/routes/front')(app);

// set port, listen for requests
app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});

