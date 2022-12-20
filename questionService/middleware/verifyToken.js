const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()


module.exports={
    verifyToken: async(req, res, next)=>{
            try {
                const token = req.headers.authorization
                
                if(!token){
                    return res.status(402).json({message: "Not authorized, Please provide a token"})
                }

                const decodeTokenData= jwt.verify(token.split(" ")[1], process.env.SECRET)

                 req.info=decodeTokenData
                 
            } catch (error) {
                return res.status(403).json({message: error.message})
            }
            next()
    }
}