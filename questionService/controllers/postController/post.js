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
            const {
                user_id
            } = req.info

            const pool = await mssql.connect(sqlConfig)

            await pool.request()
                .input("postID", id)
                .input("userID", user_id)
                .input("question", question)
                .input("category", category)
                .execute('sp_postOrEditQuestion')

            res.status(200).json({
                message: "Posted a question"
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message
            })
        }
    },
    getQuestions: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const allQuestions = await (await pool.request().execute('sp_getQuestions')).recordset;

            if (allQuestions.length > 0) {
                return res.status(200).json({
                    allPost: allQuestions
                })
            } else {
                return res.status(404).json({
                    allPost: []
                })
            }

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    getSingleQuestion: async (req, res) => {
        try {
            const {
                id
            } = req.params;
            // console.log(id);

            const pool = await mssql.connect(sqlConfig)
            const singleQuestion = await (await pool.request().input("postID", id).execute('sp_getSingleQuestion')).recordset
            if (singleQuestion.length) {
                res.status(200).json({
                    post: singleQuestion[0]
                })
            } else {
                return res.status(401).json({
                    message: `post_ID ${id}  not found`
                })
            };

        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    },
    deleteQuestion: async (req, res) => {
        try {
            const {
                id
            } = req.params
            const {
                user_id
            } = req.info

            const pool = await mssql.connect(sqlConfig)
            const post = await (await pool.request()
                .input('postID', id)
                .execute('sp_getSingleQuestion')).recordset


            if (post.length) {
                if (post[0].user_id === user_id) {
                    await pool.request()
                        .input("postID", id)
                        .execute('sp_deleteQuestion')
                    res.status(200).json({
                        message: 'post Deleted!!'
                    })
                }

            } else {
                res.status(404).json({
                    message: `post with id ${id} does not exist`
                })
            }

        } catch (error) {
            res.status(400).json({
                message: 'ID not present',
                Err: error.message
            })
        }
    },
    fetchMyQuestions: async (req, res) => {
        try {
            const {
                user_id
            } = req.info;

            const pool = await mssql.connect(sqlConfig)
            const myQuestion = await (await pool.request().input("userID", user_id).execute('sp_getMyQuestions')).recordset
            if (myQuestion.length) {
                res.status(200).json({
                    allPost: myQuestion
                })
            } else {
                return res.status(404).json({
                    message: `user has no questions`
                })
            };

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    searchQuestions: async (req, res) => {
        try {
            const {
                text
            } = req.query
            const pool = await mssql.connect(sqlConfig)

            const results = await (await pool.request()
                .input("text", text)
                .execute('sp_searchQuestions')
            ).recordset

            res.status(200).json({allPost:results})

        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    getQuestionMostAnswers: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)

            const posts = await (await pool.request().execute('sp_getQuestionMostAnswer')).recordset

            //   res.status(200).json({allPost: posts})

            if (posts.length > 0) {
                const getAllIds = posts.map(id => {
                    return id.post_id
                })
                const result = await (await pool.request().execute('sp_getQuestions')).recordset
                // console.log(result);
                
                const post = result.filter(item => getAllIds.includes(item.post_id))
                res.status(200).json({allPost: post})
            }

        } catch (error) {
            res.status(401).json({
                message: error.message
            })

        }
    },
    recentlyPosted: async(req,res)=>{
        try {
            const pool = await mssql.connect(sqlConfig)

            const posts = await (await pool.request().execute('sp_getQuestionRecently')).recordset

            //   res.status(200).json({allPost: posts})

            if (posts.length > 0) {
                const getAllIds = posts.map(id => {
                    return id.post_id
                })
                const result = await (await pool.request().execute('sp_getQuestions')).recordset
                // console.log(result);
                
                const recent = result.filter(item => getAllIds.includes(item.post_id))
                res.status(200).json({allPost: recent})
            }

        } catch (error) {
            res.status(401).json({
                message: error.message
            })

        }
    },
    topSuggested: async(req,res)=>{
        try {
            const {category}=req.params
            const pool = await mssql.connect(sqlConfig)
            const result= await (await pool.request().input("value", category).execute('sp_topSuggested')).recordset

            res.status(200).json({allPost: result})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    }
}