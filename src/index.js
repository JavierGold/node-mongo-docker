const express = require('express');


const app = express();

require('./database');

app.listen(3000);
console.log('Servidor corriendo en puerto 3000');