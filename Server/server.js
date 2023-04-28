import  express  from "express";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";

dotenv.config(); 
connectDatabase();
const app = express();

//api

app.use("/api/import", ImportData);


app.get("/", (req, res) => {
    res.send("api is running ");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));