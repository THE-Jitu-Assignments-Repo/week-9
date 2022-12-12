const { postAnswer, updateAnswer, markPreferred, vote, getAnswers } = require('../../controllers/answerController/answer')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.post("/answer", verifyToken, postAnswer)
router.post("/answerupdate", verifyToken, updateAnswer)
router.get("/getanswers/:postID", verifyToken, getAnswers)
router.post("/mark/:id", verifyToken, markPreferred)
router.post("/vote", verifyToken, vote)




module.exports= router