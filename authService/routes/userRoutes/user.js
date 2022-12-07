const { registerUser, loginUser } = require('../../controllers/userControllers/user')

const router = require('express').Router()





router.post("/", registerUser)
router.post("/login", loginUser)


module.exports= router;