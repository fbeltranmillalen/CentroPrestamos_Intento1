const express = require('express');
const morgan = require('morgan');

const app = express();
//const {mySqlConnection } = require('./database'); // código enviado a controladores

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());// para angular, el servidor puede leer json ahora.

//Routes
app.use('/api/personas', require('./routes/persona.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});