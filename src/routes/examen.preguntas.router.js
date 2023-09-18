const {Router}= require('express');

const {
    getAllPreguntasExamen,
    postOnePreguntasExamen,
    getAllPreguntasOneExamen,
    getAllInfoPreguntasOneExamen
} = require('../controllers/examen.preguntas.controllers')
const router =Router();
router.get('/examen/preguntas', getAllPreguntasExamen)
router.post('/examen/preguntas',postOnePreguntasExamen)
router.get('/examen/preguntas/:id', getAllPreguntasOneExamen)
router.get('/examen/info/preguntas/:id', getAllInfoPreguntasOneExamen)
module.exports = router;