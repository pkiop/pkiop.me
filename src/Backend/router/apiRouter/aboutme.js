var express = require('express');
var router = express.Router();

const aboutmeController = require('@Controller/api/v1/aboutmeController');
router.get('/', aboutmeController.get);
// router.post('/', aboutmeController.post);
// router.put('/', aboutmeController.put);
// router.delete('/', aboutmeController.del);

module.exports = router;