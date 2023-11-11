const {Router}= require('express');
const {
getAllpreguntasFalsoVerdadero,
getAllpreguntasMultiples,
getAllpreguntasAbiertas,
updateFV,
obtenermultiples,
updateMultiple,
obtenerabierta,
updateAbierta
}= require('../controllers/update.controllers.preguntas')
const router =Router();

router.get('/update/falso/verdadero/:dif', getAllpreguntasFalsoVerdadero)
router.get('/update/multiples/:dif', getAllpreguntasMultiples)
router.get('/update/abiertas/:dif',getAllpreguntasAbiertas)
router.put('/update/falsoverdadero/:id',updateFV)
router.get('/obtener/multiple', obtenermultiples)
router.put('/update/multiplerespuesta/:id', updateMultiple)
router.get('/obtener/abierta/:id',obtenerabierta)
router.put('/update/preguntaabierta/:id',updateAbierta)
module.exports = router;