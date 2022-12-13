const sqlConfig = require('../../config/config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
    v4: uuidv4
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
            res.status(200).json({
                message: 'Reqistered succefully'
            })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    loginUser: async (req, res) => {
        // console.log(process.env.SECRET);
        try {
            const {
                email,
                password
            } = req.body
            const pool = await mssql.connect(sqlConfig)

            const user = await (await pool.request().input("email", email).execute('sp_loginUser')).recordset[0];

            if (user) {
                const comparePass = await bcrypt.compare(password, user.password)
                if (comparePass) {
                    const {
                        password,
                        ...rest
                    } = user;
                    const token = jwt.sign(rest, process.env.SECRET, {
                        expiresIn: "20mins"
                    })
                    res.status(200).json({
                        Token: token,
                        message: "login successfully"
                    })
                } else {
                    res.status(401).json({
                        message: "Invalid credentials"
                    })
                }
            } else {
                res.status(402).json({
                    message: "User not found"
                })
            }

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }
}