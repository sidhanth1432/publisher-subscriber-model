import express from 'express';
import {appEvents} from './middleware/index.js'
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


// listens to events
appEvents(app);


app.use('/dummy',(req,res,next)=>{
    return res.status(200).json({"msg":"hello"});
});


app.listen(8001,()=>{})