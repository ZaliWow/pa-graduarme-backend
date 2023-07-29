const {Router}= require('express');
const {
    getAllPreguntas,
    getOnePreguntas,
    postOnePreguntas,
    putOnePreguntas,
    deleteOnePreguntas

} = require('../controllers/preguntas.controllers')

const router =Router();

router.get('/preguntas',getAllPreguntas)
router.get('/preguntas/:id',getOnePreguntas)
router.post('/preguntas',postOnePreguntas)
router.put('/preguntas/:id',putOnePreguntas)
router.delete('/preguntas/:id',deleteOnePreguntas)


module.exports = router;