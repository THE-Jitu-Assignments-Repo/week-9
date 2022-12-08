const { postQuestion, getQuestions, getSingleQuestion, deleteQuestion } = require('../controllers/postController/post')
const {verifyToken} = require('../middleware/verifyToken')

const router = require('express').Router()



router.post('/postquestion', verifyToken, postQuestion)
router.get('/allquestions', verifyToken,getQuestions)
router.get('/:id', getSingleQuestion)
router.get('/delete/:id', deleteQuestion)






module.exports=router