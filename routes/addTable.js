var express = require('express');
var router = express.Router();
const PersonItemController=require('../controllers/personitem')

router.post('/', PersonItemController.addPersonItem)
router.get('/', PersonItemController.showPersonAll)
router.get('/pivot', PersonItemController.showPersonItem)
router.get('/test', PersonItemController.testdata)
module.exports = router;
