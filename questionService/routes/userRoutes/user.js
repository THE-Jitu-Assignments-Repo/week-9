const { registerUser, loginUser } = require('../../controllers/userControllers/user')

const router = require('express').Router()





router.post("/", registerUser)
router.get("/login", loginUser)


module.exports= router;