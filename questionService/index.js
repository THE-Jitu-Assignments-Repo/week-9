const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const questionRouters = require('./routes/question/questionRoutes')
const answerRouters = require('./routes/answer/answerRoutes')
// const verify = require('./middleware/verifyToken')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/question", questionRouters)
app.use("/", answerRouters)


app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})