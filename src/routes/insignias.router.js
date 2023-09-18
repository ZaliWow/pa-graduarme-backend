const {Router}= require('express');

const {
    getAllinsignia,
    getOneinsignia,
    postOneinsignia,
    putOneinsignia,
    deleteOneinsignia
} = require('../controllers/insignias.controllers')

const router =Router();

router.get('/insignia',getAllinsignia)
router.get('/insignia/:id', getOneinsignia)
router.post('/insignia', postOneinsignia)
router.put('/insignia/:id', putOneinsignia)
router.delete('/insignia/:id', deleteOneinsignia)





module.exports = router;