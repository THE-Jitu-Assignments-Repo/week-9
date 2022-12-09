const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()


module.exports={
     commentAnswer: async (req, res) => {
        try {
            const {user_id}= req.info
            const {answer_id, comment}= req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
            .input("commentID", id)
            .input("userID", user_id)
            .input("answerID", answer_id)
            .input("comment", comment)
            .execute('sp_postOrEditComment')

            res.status(200).json({message: "Commented succesfully"})

        } catch (error) {
            res.status(401).json({message: error.message})
        }
    },
    getComments:async (req, res) => {
        try {

        } catch (error) {

        }
    },
    deleteComment: async (req, res) => {
        try {

        } catch (error) {

        }
    },
}