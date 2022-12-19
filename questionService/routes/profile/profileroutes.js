const { getUserDetails } = require('../../controllers/user/profilecontroller')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()


router.get("/userDetails",verifyToken, getUserDetails)





module.exports= router