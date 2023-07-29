const {Router}= require('express');

const{
    getAllCursoEstudiante,
    getOneCursoEstudiante,
    putOneCursoEstudiante,
    postOneCursoEstudiante,
    deleteCursoEstudiante
} = require('../controllers/Estud.Curso.controllers')

const router =Router();

router.get('/cursos/estudiantes',getAllCursoEstudiante)
router.get('/cursos/estudiantes/:id', getOneCursoEstudiante)
router.put('/cursos/estudiantes/:id', putOneCursoEstudiante)
router.post('/cursos/estudiantes',postOneCursoEstudiante)
router.delete('/cursos/estudiantes/:id', deleteCursoEstudiante)


module.exports = router;