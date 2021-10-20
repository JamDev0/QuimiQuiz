const Express = require('express');
const ExpApp = Express();
const Fs = require('fs');
const Path = require('path');
const Datas = require('./Routes/Datas')

const Port = process.env.PORT || 8000;


ExpApp.listen(Port, ()=>{
    console.log(`Servidor na porta: ${Port}`);
});

ExpApp.use(Express.static(Path.join(__dirname, '/Client')));


ExpApp.use('/Datas', Datas);

