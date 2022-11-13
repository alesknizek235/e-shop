const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'controller'));

router.get("/mainView", controller.mainView);
router.get("/eshop", controller.eshop);

module.exports = router;