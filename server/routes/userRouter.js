const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController.js');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);

module.exports = router;