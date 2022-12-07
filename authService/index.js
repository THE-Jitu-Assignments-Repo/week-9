const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes/user')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors());

app.use("/user", userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`you are on port: ${process.env.PORT}`)
})