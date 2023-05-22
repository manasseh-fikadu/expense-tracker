const express = require('express');
const router = express.Router();
const { getUsers, getUserById, addUser } = require('../controllers/users');

router
    .route('/login/:id')
    .get(getUserById)   

router
    .route('/signup')
    .post(addUser);

module.exports = router;
