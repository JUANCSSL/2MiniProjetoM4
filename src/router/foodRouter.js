const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');

router.get('/cafe-da-manha', foodController.obterCafeDaManha);
router.get('/almoco', foodController.obterAlmoco);
router.get('/jantar', foodController.obterJantar);

module.exports = router;

