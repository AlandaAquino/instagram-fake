const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/postsController');

router.get('/', postsController.index);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);
router.get('/:usuarios_id', postsController.show);

module.exports = router;
