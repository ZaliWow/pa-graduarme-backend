const {Router}= require('express');
const {
    getAllCurso,
    getOneCurso,
    postOneCurso,
    deleteOneCurso,
    putOneCurso,
    putOneCursoOneDocente
}= require('../controllers/curso.controllers')

const router =Router();
router.get('/curso', getAllCurso)
router.get('/curso/:id', getOneCurso)
router.post('/curso', postOneCurso)
router.delete('/curso/:id', deleteOneCurso)
router.put('/curso/:id', putOneCurso)
router.put('/editar/curso/docente/:id', putOneCursoOneDocente)
module.exports = router;