const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuffs');

router.post('/', stuffCtrl.CreateThing);

router.get('/:id',stuffCtrl.getOneThing);

router.put('/:id',stuffCtrl.modifyThing);

router.delete('/:id',stuffCtrl.deleteThing);

router.get('/' + '',stuffCtrl.getAllThing);

module.exports = router;