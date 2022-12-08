const { postQuestion, getQuestions, getSingleQuestion, deleteQuestion } = require('../../controllers/postController/post')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.get('/allquestions', getQuestions)
router.post('/postquestion', verifyToken, postQuestion)
router.get('/:id', verifyToken, getSingleQuestion)
router.get('/delete/:id', verifyToken, deleteQuestion)






module.exports=router