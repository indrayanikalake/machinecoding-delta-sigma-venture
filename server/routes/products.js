const express = require("express");
const { addItems, getItems } = require('../controller/product')

const router = express.Router();
router.route('/').post(addItems).get(getItems)

module.exports = router;