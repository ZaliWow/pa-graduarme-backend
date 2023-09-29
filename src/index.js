const express = require('express');
const morgan= require('morgan')
const cors =require('cors');
const port = process.env.PORT || 4000;
const registroEstudiantes = require('./routes/estudiantes.router')
const registroAdmin = require('./routes/Admin.router')
const registroProfesor = require('./routes/profesor.router')
const regristroCurso = require('./routes/curso.router')
const registroCursoEstudiante= require('./routes/Estud.Curso.router')
const registroPreguntas = require('./routes/preguntas.router')
const registroFalsoVerdadero = require('./routes/falso.verdadero.router')
const registroAbierta= require('./routes/abierta.router')
const registroMultiple= require('./routes/multiple.router')
const registroDatosExamen = require('./routes/datos.examen.router')
const registroExamenPreguntas = require('./routes/examen.preguntas.router')
const registroInsignias = require('./routes/insignias.router')
const registroInsigniaEstudiante = require('./routes/Insignia.Estudiante.router')
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
//para usar rutas de multiple.controllers
app.use(registroMultiple)
//para usar las rutas de datos.examen.controllers
app.use(registroDatosExamen)
//para usar las rutas de preguntas.examen.controllers
app.use(registroExamenPreguntas)
//para usar las rutas de insignias.controllers
app.use(registroInsignias)
// para usar las rutas de insignia.estudiante.controllers
app.use(registroInsigniaEstudiante)
//para gestionar errores
app.use((err,req,res,next)=>{
    return res.json({
        message:err.message
    })
})
//puerto del servidor 
app.listen(port)
console.log('server on port 4000')