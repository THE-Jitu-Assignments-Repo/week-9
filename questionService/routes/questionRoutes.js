const { postQuestion, getQuestions, getSingleQuestion, deleteQuestion } = require('../controllers/postController/post')

const router = require('express').Router()



router.post('/postquestion', postQuestion)
router.get('/allquestions', getQuestions)
router.get('/:id', getSingleQuestion)
router.get('/delete/:id', deleteQuestion)






module.exports=router