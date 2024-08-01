// server\index.js
const express = require("express")
const app = express();

const database = require("./config/database")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require('express-fileupload');
const { cloudinaryConnect } = require('./config/cloudinary')
const cors = require('cors');

// route imports
const userRoutes = require("./routes/User");
const documentRoutes = require("./routes/Document");
const adminRoutes  = require("./routes/Admin")


dotenv.config();
const PORT = process.env.PORT ||4000

// database connection
database.connect();

// middleware
app.use(express.json());
app.use(cookieParser())


app.use(
    cors({
      origin: "http://localhost:3000/", 
      credentials: true,
    })
  );
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
  }));

  cloudinaryConnect();

// routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/documents",documentRoutes)
app.use('/api/v1/admin', adminRoutes); 
;




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
