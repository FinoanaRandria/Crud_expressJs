const {Router} = require('express');
const router = Router()
const {racine,ajouter, supprimer, modifier} = require('../controllers/ctrl')

router.get('/',racine)
router.post('/add',ajouter)
router.post('/delete',supprimer)
router.post('/update',modifier)
module.exports = router