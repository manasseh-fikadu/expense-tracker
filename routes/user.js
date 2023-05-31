const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser } = require('../controllers/users');

router
    .route('/login/6476cc44df56f113102af36d')
    .get(getUserById)   

router
    .route('/signup')
    .post(addUser);

router
    .route('/')
    .get(getUsers);

module.exports = router;
