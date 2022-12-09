const { postAnswer, updateAnswer } = require('../../controllers/answerController/answer')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.post("/answer", verifyToken, postAnswer)
router.post("/answerupdate", verifyToken, updateAnswer)


module.exports= router