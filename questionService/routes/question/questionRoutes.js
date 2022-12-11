const { postQuestion, getQuestions, getSingleQuestion, deleteQuestion, fetchMyQuestions, searchQuestions, getQuestionMostAnswers } = require('../../controllers/postController/post')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.get('/allquestions', getQuestions)
router.post('/postquestion', verifyToken, postQuestion)
router.get('/mostanswers', getQuestionMostAnswers)
router.get('/:id', verifyToken, getSingleQuestion)
router.get('/qst/search', verifyToken, searchQuestions)
router.get('/myquestion/:id', verifyToken, fetchMyQuestions)
router.get('/delete/:id', verifyToken, deleteQuestion)







module.exports=router