const {Router}= require('express');

const {
    getAllMultiple,
    getOneMultiple,
    postOneMultiple,
    putOneMultiple,
    deleteOneMultiple
} = require('../controllers/multiple.controllers')
const router =Router();
router.get('/multiple',getAllMultiple)
router.get('/multiple/:id',getOneMultiple)
router.post('/multiple',postOneMultiple)
router.put('/multiple/:id',putOneMultiple)
router.delete('/multiple/:id',deleteOneMultiple)

module.exports = router;