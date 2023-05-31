const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser } = require('../controllers/users');

router
    .route('/login/647703bbf01bf12f34ccb514')
    .get(getUserById)   

router
    .route('/signup')
    .post(addUser);

router
    .route('/')
    .get(getUsers);

module.exports = router;
