const { postQuestion, getQuestions, getSingleQuestion, deleteQuestion, fetchMyQuestions, searchQuestions, getQuestionMostAnswers, getPostDetails } = require('../../controllers/postController/post')
const {verifyToken} = require('../../middleware/verifyToken')

const router = require('express').Router()



router.get('/allquestions', getQuestions)
router.post('/postquestion', verifyToken, postQuestion)
router.get('/mostanswers', getQuestionMostAnswers)
router.get('/:id', getSingleQuestion)
router.get('/getdetails/:id',getPostDetails)
router.get('/qst/search', verifyToken, searchQuestions)
router.get('/myquestion/find', verifyToken, fetchMyQuestions)
router.delete('/delete/:id', verifyToken, deleteQuestion)







module.exports=router