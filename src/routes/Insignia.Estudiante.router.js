const {Router}= require('express');

const {
    getAllInsigniaEstudiante,
    getAllInsigniaOneEstudiante,
    postOneInsigniaOneEstudiante,
    deleteOneInsigniaOneEstudiante,
    putOneInsnigniaOneEstudiante
} = require('../controllers/Insignia.Estudiante.controllers')
const router =Router();
 
router.get('/insignias/estudiante', getAllInsigniaEstudiante)
router.get('/insignias/estudiante/:id', getAllInsigniaOneEstudiante)
router.post('/insignias/estudiante', postOneInsigniaOneEstudiante)
router.put('/insignias/estudiante/:id', putOneInsnigniaOneEstudiante )
router.delete('/insignias/estudiante/:id', deleteOneInsigniaOneEstudiante)


module.exports = router;