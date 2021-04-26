const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postsController');

/* GET home page. */
router.get('/', postController.index);

module.exports = router;
