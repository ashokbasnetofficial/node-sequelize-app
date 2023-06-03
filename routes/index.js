const express = require('express');
const HomeController = require('@/controllers/HomeController');
const LoginController = require('@/controllers/LoginController');
const router = express.Router();

router.get('/', HomeController.index);
router.get('/new', HomeController.new);
router.post('/new', HomeController.add);
router.get('/edit/:id', HomeController.edit);
router.get('/delete/:id', HomeController.delete);
router.get('/test', HomeController.test);

router.get('/login', LoginController.login);
router.get('/logout', LoginController.logout);
router.get('/login-test', LoginController.loginTest);
module.exports = router;