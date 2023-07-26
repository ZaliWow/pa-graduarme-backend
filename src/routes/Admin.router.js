const {Router}= require('express');

const {
    getAllAdmin,
    postOneAdmin,
    deleteAdmin,
    getOneAdmin
} = require("../controllers/Admin.controllers")
const router =Router();
router.get('/Admin', getAllAdmin)
router.post('/Admin', postOneAdmin)
router.delete('/Admin/:id', deleteAdmin)
router.get('/Admin/:id',getOneAdmin)


module.exports = router;