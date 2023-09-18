const {Router}= require('express');
const { 
    getAllProfesor,
    getOneProfesor,
    postOneProfesor,
    deleteOneProfesor,
    putOneProfesor,
    getOneCorreoProfesor
}= require("../controllers/profesor.controllers")

const router =Router();

router.get('/profesor',getAllProfesor)
router.get('/profesor/:id', getOneProfesor)
router.post('/profesor', postOneProfesor)
router.delete('/profesor/:id', deleteOneProfesor)
router.put('/profesor/:id', putOneProfesor)
router.get('/profesor/correo/:id', getOneCorreoProfesor)




module.exports = router;