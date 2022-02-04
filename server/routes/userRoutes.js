const { Router } = require('express');
const router = new Router();
const userController = require('./../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

module.exports = router;
