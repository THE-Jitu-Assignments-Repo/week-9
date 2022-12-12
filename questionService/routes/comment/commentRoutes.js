const { commentAnswer, getComments } = require('../../controllers/commentController/comment')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()


router.post("/comment",verifyToken, commentAnswer)
router.get("/getcomment/:answer_id", getComments)





module.exports= router