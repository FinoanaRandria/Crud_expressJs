const {Router} = require('express');
const router = Router()
const {racine,ajouter} = require('../controllers/ctrl')

router.get('/',racine)
router.post('/add',ajouter)


module.exports = router