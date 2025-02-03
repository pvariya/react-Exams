const express = require('express')
const cors = require('cors');
const connectToDatabase = require('./config/db');
const productRouter = require('./routes/product');


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Default Route "});
});

app.use("/product",productRouter)

const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`listening on https:localhost:${PORT}`);
    connectToDatabase()
})