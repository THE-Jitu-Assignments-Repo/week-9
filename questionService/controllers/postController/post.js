const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {v4:uuidv4} = require('uuid')


dotenv.config()

module.exports={
    postQuestion:async(res,req)=>{
        try {
            const {question, category} = req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
            .input("postID", id)
            .input("question", question)
            .input("category", category)
            .execute('sp_postQuestion')

            res.status(200).json({message: "Posted a question"})
        } catch (error) {
            res.status(402).json({message: error.message})
        }
    },
    getQuestions: async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    getSingleQuestion:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    deleteQuestion:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    postAnswer:async()=>{
        try {
            
        } catch (error) {
            
        }
    }, 
    markPreferred:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    vote:async()=>{
        try {
            
        } catch (error) {
            
        }
    }, 
    commentAnswer:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    fetchMyQuestions:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    searchQuestions:async()=>{
        try {
            
        } catch (error) {
            
        }
    },
    questionMostAnswers:async()=>{
        try {
            
        } catch (error) {
            
        }
    }
}
