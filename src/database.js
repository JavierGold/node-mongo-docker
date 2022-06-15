const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase')
    .then(db => console.log('Conexión exitosa a ',db.connection.host))
    .catch(err=>console.error(err))