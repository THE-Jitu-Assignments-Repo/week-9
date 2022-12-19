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
            const {answer_id} = req.params
            const pool = await mssql.connect(sqlConfig)
            
            const comments = await (await pool.request().input('answerID', answer_id).execute('sp_getComments')).recordset[0]
            // console.log(answer_id);

            res.status(200).json({comments})
        } catch (error) {
            res.status(402).json({message: error.message})
        }
    },
    deleteComment: async (req, res) => {
        try {

        } catch (error) {

        }
    },
}