const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()

module.exports = {
    postAnswer: async (req, res) => {
        try {
            const {
                user_id
            } = req.info
            const {
                post_id,
                answer
            } = req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)
            if(post_id && answer ){

                await pool.request()
                    .input("answerID", id)
                    .input("userID", user_id)
                    .input("postID", post_id)
                    .input("answer", answer)
                    .execute('sp_postOrEditAnswer')
    
                res.status(200).json({
                    message: "Question answered succesfully"
                })
            }else{
                res.status(204).json({message: "Please fill in the empty fields"})
            }
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    updateAnswer: async (req, res) => {
        try {
            const {
                user_id
            } = req.info
            const {
                post_id,
                answer
            } = req.body
            const id = uuidv4()

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
                .input("answerID", id)
                .input("userID", user_id)
                .input("postID", post_id)
                .input("answer", answer)
                .execute('sp_postOrEditAnswer')

            res.status(200).json({
                message: "Answer updated succesfully"
            })
        } catch (error) {
            res.status(401).json({
                message: error.message
            })
        }
    },
    getAnswers: async (req, res) => {
        try {
            const {
                postID
            } = req.params
            const pool = await mssql.connect(sqlConfig)
            const Answers = await (await pool.request().input('postID', postID).execute('sp_getAnswers')).recordset

            res.status(200).json(Answers)

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    markPreferred: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const pool = await mssql.connect(sqlConfig)

            const {
                user_id
            } = req.info
            const recordID = await (await pool.request().input("answerID", id).execute('sp_getTheAnswer')).recordset[0]
            // console.log(recordID);

            if(!recordID){
                res.status(404).json({message: "Invalid credetials"})
            }else{

                if (user_id === recordID.user_id) {
    
                    await pool.request()
                        .input("answerID", id)
                        .execute('sp_markPreferred')
    
                    res.status(200).json({
                        message: "marked as preferred"
                    })
                }else{
                    res.status(401).json({messgae: "Not authorized"})
                }
            }

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }, 
    getAnswerDetails: async(req, res)=>{
        try {
            const {id}=req.params
            const pool = await mssql.connect(sqlConfig)

            const details = await (await pool.request().input("answerID", id).execute('sp_getAnswerDetails')).recordset[0]
            
            res.status(200).json({details})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    },
    vote: async (req, res) => {
        try {
            const {
                answer_id
            } = req.body
            const {
                user_id
            } = req.info

            const id = uuidv4()
            const pool = await mssql.connect(sqlConfig)

            await pool.request()
                .input("voteID", id)
                .input("userID", user_id)
                .input("answerID", answer_id)
                .execute('sp_upvoteOrDownvote')

            res.status(200).json({
                message: "Succefully voted"
            })

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}