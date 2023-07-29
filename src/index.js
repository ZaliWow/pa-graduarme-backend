const express = require('express');
const morgan= require('morgan')
const cors =require('cors');
const registroEstudiantes = require('./routes/estudiantes.router')
const registroAdmin = require('./routes/Admin.router')
const registroProfesor = require('./routes/profesor.router')
const regristroCurso = require('./routes/curso.router')
const registroCursoEstudiante= require('./routes/Estud.Curso.router')
const registroPreguntas = require('./routes/preguntas.router')
const registroFalsoVerdadero = require('./routes/falso.verdadero.router')
const registroAbierta= require('./routes/abierta.router')
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
//para usar las rutas de Admin.controllers
app.use(registroAdmin)
//para usar las rutas del profesor.controllers
app.use(registroProfesor)
//para user las rutas de curso.controllers
app.use(regristroCurso)
//para usar las rutas de Estud.curso.controllers
app.use(registroCursoEstudiante)
//para usar las rutas de preguntas.controllers
app.use(registroPreguntas)
//para usar rutas de falso.verdadero.controllers
app.use(registroFalsoVerdadero)
// para usar rutas de abierta.controllers
app.use(registroAbierta)
//para gestionar errores
app.use((err,req,res,next)=>{
    return res.json({
        message:err.message
    })
})
//puerto del servidor 
app.listen(4000)
console.log('server on port 4000')