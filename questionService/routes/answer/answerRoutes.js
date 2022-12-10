const { postAnswer, updateAnswer, markPreferred } = require('../../controllers/answerController/answer')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.post("/answer", verifyToken, postAnswer)
router.post("/answerupdate", verifyToken, updateAnswer)
router.post("/mark/:id", verifyToken, markPreferred)



module.exports= router