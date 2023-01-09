const { getUserDetails, getStackQAUsersDetails } = require('../../controllers/user/profilecontroller')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()


router.get("/userDetails",verifyToken, getUserDetails)
router.get("/stackqaUsers", verifyToken,getStackQAUsersDetails)




module.exports= router