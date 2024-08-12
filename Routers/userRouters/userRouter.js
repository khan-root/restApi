const express = require('express')
const { getAllUser } = require('../../Controllers/UserController/userController')
const router = express.Router()


router.get('/all-users', getAllUser)
module.exports = router