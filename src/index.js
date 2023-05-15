const express = require('express');
const morgan= require('morgan')
const cors =require('cors');
const registroEstudiantes = require('./routes/estudiantes.router')
//crear el servidor de express
const app= express();
//para conectar el backend con el frontend
app.use(cors());
// para que express pueda entender los json
app.use(express.json());
//para formularios
app.use(express.urlencoded({extended: false}));
//para compilar desde la consola npm run dev
app.use(morgan('dev'));
//para usar las rutas de estudiantes.controllers
app.use(registroEstudiantes);
//para gestionar errores
app.use((err,req,res,next)=>{
    return res.json({
        message:err.message
    })
})
//puerto del servidor 
app.listen(4000)
console.log('server on port 4000')