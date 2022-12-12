const { commentAnswer, getComments } = require('../../controllers/commentController/comment')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()


router.post("/comment",verifyToken, commentAnswer)
router.get("/getcomment", getComments)





module.exports= router