const jwt = require("jsonwebtoken");
require("dotenv").config()

exports.auth = async(req,res,next)=>{
    try {
        // extrat token from body or header or cookie
        const token = req.body.token ||req.cookies.token || req.header("Authorization").replace("Bearer ", ",");

        // check token fetched or not
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message: "Token is missing",
            })
        }

        // verify the token 
        try {
         
            const decode = await jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode; // WE can use this token in the future every
        
        

        } catch(error) {
            return res.status(401).json({
                success:false,
                message: "Token is invalid",
            })
        }

        next();

    }catch(error)
    {
        return res.staus(401).json({
            success:false,
            message: "Something went wrong while verifying token",    
            })
    }
}

exports.isBeneiciary = async(req,res,next)=>{

    try{
         
        if(req.user.accountType !== "Beneiciary")
        {
            return res.status(401).json({
                success:false,
                message:"This is protected route for Beneiciary"
            })
        }

        next();
    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"accountType is not matching " 
    
        })
    }
}

exports.isOperator = async (req,res,next) => {
    try{
         
        if(req.user.accountType !== "Operator")
        {
            return res.status(401).json({
                success:false,
                message:"This is protected route for Operator"
            })
        }

        next();
    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"accountType is not matching "
        })
    }
}

exports.isAdmin = async (req,res,next) => {
    try{
         
        if(req.user.accountType !== "Admin")
        {
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }

        next();
    }catch(error)
    {
        return res.status(500).json({
            success:false,
            message:"accountType is not matching "
        })
    }
}