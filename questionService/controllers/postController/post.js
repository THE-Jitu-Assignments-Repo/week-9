const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {
    v4: uuidv4
} = require('uuid')


dotenv.config()

module.exports = {
    postQuestion: async (req, res) => {
        try {
            const {
                question,
                category
            } = req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
                .input("postID", id)
                .input("question", question)
                .input("category", category)
                .execute('sp_postOrEditQuestion')

            res.status(200).json({
                message: "Posted a question"
            })
        } catch (error) {
            console.log(error);
            res.status(401).json({message: error.message})
        }
    },
    getQuestions: async (req,res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const allQuestions = await (await pool.request().execute('sp_getQuestions')).recordset;
            
            if(allQuestions.length > 0){
                return res.status(200).json({allPost: allQuestions})
            }else{
                return res.status(203).json({allPost: []})
            }

        } catch (error) {
                res.status(400).json({message: error.message})
        }
    },
    getSingleQuestion: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    deleteQuestion: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    postAnswer: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    markPreferred: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    vote: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    commentAnswer: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    fetchMyQuestions: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    searchQuestions: async (req,res) => {
        try {

        } catch (error) {

        }
    },
    questionMostAnswers: async (req,res) => {
        try {

        } catch (error) {

        }
    }
}