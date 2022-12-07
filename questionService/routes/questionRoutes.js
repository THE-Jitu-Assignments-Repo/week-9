const { postQuestion, getQuestions } = require('../controllers/postController/post')

const router = require('express').Router()



router.post('/postquestion', postQuestion)
router.get('/allquestions', getQuestions)




module.exports=router