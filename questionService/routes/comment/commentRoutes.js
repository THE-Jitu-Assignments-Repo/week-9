const { commentAnswer } = require('../../controllers/commentController/comment')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()


router.post("/comment",verifyToken, commentAnswer)




module.exports= router