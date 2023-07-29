const {Router}= require('express');
const {
    getAllFalsoVerdadero,
    getOneFalsoVerdadero,
    postFalsoVerdadero,
    putFalsoVerdadero,
    deleteFalsoVerdadero
}= require('../controllers/falso.verdadero.controllers')

const router =Router();

router.get('/falso/verdadero', getAllFalsoVerdadero)
router.get('/falso/verdadero/:id',getOneFalsoVerdadero)
router.post('/falso/verdadero',postFalsoVerdadero)
router.put('/falso/verdadero/:id',putFalsoVerdadero)
router.delete('/falso/verdadero/:id',deleteFalsoVerdadero)

module.exports = router;