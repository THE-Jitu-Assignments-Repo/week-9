const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const questionRouters = require('./routes/question/questionRoutes')
const answerRouters = require('./routes/answer/answerRoutes')
const  commentRouters  = require('./routes/comment/commentRoutes')
const profileRouters = require('./routes/profile/profileroutes')
// const verify = require('./middleware/verifyToken')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/question", questionRouters)
app.use("/", answerRouters)
app.use('/', commentRouters)
app.use('/', profileRouters)


app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})