const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()


module.exports={
    verifyToken: async(res, req, next)=>{
            try {
                const token = req.headers['token']
                if(!token){
                    return res.status(402).json({message: "Not authorized, Please provide a token"})
                }

                const decodeTokenData= jwt.verify(token, process.env.SECRET)
                req.info=decodeTokenData
            } catch (error) {
                return res.status(403).json({message: error.message})
            }
            next()
    }
}