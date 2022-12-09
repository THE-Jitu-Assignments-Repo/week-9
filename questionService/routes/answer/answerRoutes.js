const { postAnswer } = require('../../controllers/answerController/answer')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.post("/answer", verifyToken, postAnswer)

module.exports= router