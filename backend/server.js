import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import contactRouter from "./routes/contactRoute.js"

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use('/api/contact', contactRouter);


// API endpoints
app.get("/", (req,res) => {
    res.send("API Working!")
})

app.listen(port, () => console.log("Server started at PORT : " + port ));