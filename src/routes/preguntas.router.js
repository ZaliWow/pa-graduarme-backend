const {Router}= require('express');
const {
    getAllPreguntas,
    getOnePreguntas,
    postOnePreguntas,
    putOnePreguntas,
    deleteOnePreguntas,
    getPreguntasExamen,
    getTwoFV,
    getTwoMultiple,
    getOnesAbierta
    

} = require('../controllers/preguntas.controllers')

const router =Router();

router.get('/preguntas',getAllPreguntas)
router.get('/preguntas/:id',getOnePreguntas)
router.post('/preguntas',postOnePreguntas)
router.put('/preguntas/:id',putOnePreguntas)
router.delete('/preguntas/:id',deleteOnePreguntas)
router.get('/preguntas/examen/:dif',getPreguntasExamen)
router.get('/preguntas/examen/abierta/:dif', getOnesAbierta)
router.get('/preguntas/examen/multiple/:dif',getTwoMultiple)
router.get('/preguntas/examen/fv/:dif', getTwoFV)


module.exports = router;