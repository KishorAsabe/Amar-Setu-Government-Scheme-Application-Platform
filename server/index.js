const express = require("express")
const app = express();

const database = require("./config/database")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

// route imports
const userRoutes = require("./routes/User");


dotenv.config();
const PORT = process.env.PORT ||4000

// database connection
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser())


// routes
app.use("/api/v1/auth", userRoutes);


// default routes
app.get('/', (req,res)=>{
    return res.json({
        success: true,
        message:"Your server is running..."
    })
})

// start server
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
