const { postAnswer, updateAnswer, markPreferred, vote, getAnswers, getAnswerDetails } = require('../../controllers/answerController/answer')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.post("/answer", verifyToken,postAnswer)
router.put("/answerupdate", verifyToken, updateAnswer)
router.get("/getanswers/:postID", getAnswers)
router.patch('/mark/:id', verifyToken, markPreferred)
// router.get('/answerdetails/:id', getAnswerDetails)
router.patch("/vote/:ID", verifyToken, vote)




module.exports= router