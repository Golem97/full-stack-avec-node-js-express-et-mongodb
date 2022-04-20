const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuffs');
const auth = require('../middleware/auth');


router.post('/',auth, stuffCtrl.CreateThing);
router.get('/:id',auth,stuffCtrl.getOneThing);
router.put('/:id',auth,stuffCtrl.modifyThing);
router.delete('/:id',auth,stuffCtrl.deleteThing);
router.get('/' + '',auth,stuffCtrl.getAllThing);

module.exports = router;