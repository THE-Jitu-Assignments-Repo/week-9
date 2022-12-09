const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()

module.exports={
    postAnswer: async (req, res) => {
        try {
            const {user_id} = req.info
            const {post_id, answer}=req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
            .input("answerID", id)
            .input("userID", user_id)
            .input("postID", post_id)
            .input("answer", answer)
            .execute('sp_postOrEditAnswer')

            res.status(200).json({message: "Question answered succesfully"})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    },
    getAnswers:  async (req, res) => {
        try {

        } catch (error) {

        }
    },
    markPreferred: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    vote: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}