const {Router}= require('express');

const {
    getAllAbierta,
    getOneAbierta,
    postOneAbierta,
    putOneAbierta,
    deleteOneabierta
} = require("../controllers/abierta.controllers")
const router =Router();

router.get('/abierta', getAllAbierta)
router.get('/abierta/:id', getOneAbierta)
router.post('/abierta',postOneAbierta)
router.put('/abierta/:id',putOneAbierta)
router.delete('/abierta/:id', deleteOneabierta)


module.exports = router;