const express = require("express");
const router = express.Router();
const prod = require('./prod')

router.use('/Prod',prod)

module.exports = router;
