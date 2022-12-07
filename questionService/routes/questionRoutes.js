const { postQuestion } = require('../controllers/postController/post')

const router = require('express').Router()



router.post('/postquestion', postQuestion)



module.exports=router