const {Router}= require('express');
const { 
    getAllStudents,
    getOneStudent,
    postOneStudent,
    deleteOneStudent,
    putOneStudent

} =require( '../controllers/estudiantes.controllers');

const router =Router();

router.get('/registro/estudiantes', getAllStudents);
router.get('/registro/estudiantes/:id',getOneStudent);
router.post('/registro/estudiantes',postOneStudent);
router.delete('/registro/estudiantes/:id',deleteOneStudent);
router.put('/registro/estudiantes/:id',putOneStudent);



module.exports = router;