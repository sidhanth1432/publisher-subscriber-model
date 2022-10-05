import express from 'express';
import cors from 'cors'
import proxy from 'express-http-proxy'
const app=express();

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


app.use('/dummy',proxy('http://localhost:8001'))






app.use('/dummy',(req,res,next)=>{
    return res.status(200).json({"msg":"hello"});
});


app.listen(8000,()=>{})