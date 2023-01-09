const mssql = require('mssql')
const sqlConfig = require('../../config/config')
const dotenv = require('dotenv')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()


module.exports={
    getUserDetails: async(req,res)=>{
        try {
            const {user_id}=req.info
            const pool = await mssql.connect(sqlConfig)

            const userDetails = await (await pool.request().input("userID", user_id).execute('sp_getUserDetails')).recordset[0]

            res.status(200).json({userDetails})
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    },
    getStackQAUsersDetails: async(req,res)=>{
        try {            
            const pool = await mssql.connect(sqlConfig)

            const AlluserDetails = await (await pool.request().execute('sp_getStackQaUsers')).recordset

            res.status(200).json(AlluserDetails)
        } catch (error) {
            res.status(401).json({message: error.message})
        }
    }
   
}