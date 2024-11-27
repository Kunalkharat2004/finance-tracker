import express from "express"; 
import clientRoute from "./routes/clientRoute.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import cors from "cors"

const app = express()
app.use(cors({
    origin:"http://localhost:5173"
    
}))
app.use(express.json())
app.use("/api/clients",clientRoute);

app.use(globalErrorHandler)

export default app;