import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const validatetoken = asyncHandler(async(req,res,next) =>{
    let token ;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        if(!token) {
            res.status(401);
            throw new Error("token is missing");
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err){
                res.status(401);
                throw  new Error("User is not authorized");
            }
            req.user = decoded.user;
            next();
            console.log(decoded);
            
        })
    } else {
        res.status(401);
        throw new Error("Authorization header is missing or invalid");
    }
})

export default validatetoken;