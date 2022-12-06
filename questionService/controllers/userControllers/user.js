const sqlConfig = require('../../config/config')
const bcrypt = require('bcrypt')
const {
    v4:uuidv4
} = require('uuid')
const mssql = require('mssql')
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.SALTROUNDS);

module.exports = {
    registerUser: async (req, res) => {

        try {
            const {
                username,
                email,
                password,
                imageUrl
            } = req.body
            const id = uuidv4()
            const pool = await mssql.connect(sqlConfig)
            const hash = await bcrypt.hash(password, 10)

            const newUser = {
                username,
                email,
                password: hash,
                imageUrl
            }
            

            await pool.request()
                .input("userID", id)
                .input("username", newUser.username)
                .input("email", newUser.email)
                .input("password", newUser.password)
                .input("imageUrl", newUser.imageUrl)
                .execute('sp_registerUser');
            res.status(200).json({message: 'Reqistered succefully'})

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    loginUser: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}