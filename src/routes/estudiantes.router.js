const {Router}= require('express');
const { 
    getAllStudents,
    getOneStudent,
    postOneStudent,
    deleteOneStudent,
    putOneStudent,
    getLoguinStudent,
    getRankStudent,
    putPuntajeEstudiante

} =require( '../controllers/estudiantes.controllers');

const router =Router();

router.get('/loguin', getLoguinStudent)
router.get('/registro/estudiantes', getAllStudents);
router.get('/registro/estudiantes/:id',getOneStudent); 
router.post('/registro/estudiantes',postOneStudent);
router.delete('/registro/estudiantes/:id',deleteOneStudent);
router.put('/registro/estudiantes/:id',putOneStudent);
router.get('/rank/estudiantes', getRankStudent)
router.put('/registro/estudiante/puntaje/:id', putPuntajeEstudiante)



module.exports = router;