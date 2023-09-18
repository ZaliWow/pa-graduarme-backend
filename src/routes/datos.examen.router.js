const {Router}= require('express');

const {
    getAllExamen,
    getOneExamen,
    postOneExamen,
    deleteOneExamen,
    getExamenOneEstudiante
} = require('../controllers/datos.examen.controllers')
const router =Router();
const {}=require('../controllers/datos.examen.controllers')

router.get('/datos/examen',getAllExamen)
router.get('/datos/examen/:id', getOneExamen)
router.post('/datos/examen',postOneExamen)
router.get('/datos/examenes/estudiante/:id', getExamenOneEstudiante)
router.delete('/datos/examen/:id', deleteOneExamen)
module.exports = router;