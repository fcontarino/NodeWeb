const express = require('express');
const path = require('path')
const app = express();

//Configuraciones
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

// routes
app.use(require('./routes/'));

//Rutas Estaticas
app.use(express.static(path.join(__dirname,'public')))

//Escucha del servidor
app.listen(app.get('port'), ()=>{
    console.log('server en el puerto',app.get('port'));
});

