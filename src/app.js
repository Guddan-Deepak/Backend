import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({                      
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))   
//we use use for middleware 
// handles cross-origin requests

app.use(express.json({limit: "16kb"}))  // url se jo data aata hai json format me 
// parses JSON body
app.use(express.urlencoded({extended: true,limit: "16kb"}))       // parses form data
app.use(express.static("public")) // serves static files
app.use(cookieParser())     // parses cookies



//routes
import userRouter from "./routes/user.router.js"


//routes declaration
app.use("/api/v1/users",userRouter)     //https://localhost:8000/api/v1/users/register



export { app }