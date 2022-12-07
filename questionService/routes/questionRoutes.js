const { postQuestion, getQuestions, getSingleQuestion } = require('../controllers/postController/post')

const router = require('express').Router()



router.post('/postquestion', postQuestion)
router.get('/allquestions', getQuestions)
router.get('/:id', getSingleQuestion)





module.exports=router