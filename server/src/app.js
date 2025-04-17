
const express = require('express');
const { config } = require('./config/app.config.js');
const app = express(); //retorna instancia de la applicacion
const contactRoutes = require('./ressources/contact/contact.router.js');





//}
app.get('/', (req, res) => {
    //req - request - peticion
    //res - response - respuesta
    res.send('Hello World!');
});

//.use usa la ruta /contact para todas las rutas de contacts.
app.use("/api/contacts", contactRoutes);


//listen - Escuchar peticiones en el puerto 3000
app.listen(3000, () => {
    console.log('Server on port 3000');
});


