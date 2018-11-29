var express = require('express');
var router = express.Router();
const PersonItemController=require('../controllers/personitem')
const FacebookFeedController=require('../controllers/facebookFeed')

router.post('/', PersonItemController.addPersonItem)
router.get('/feed', FacebookFeedController.showFeed)
router.get('/', PersonItemController.showPersonAll)
router.get('/pivot', PersonItemController.showPersonItem)
router.get('/test', PersonItemController.testdata)
module.exports = router;
