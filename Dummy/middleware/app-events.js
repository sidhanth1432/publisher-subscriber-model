import {SubscribeEvents} from '../service/index.js'

export const appEvents=(app)=>{

    app.use("/app-events",async(req,res,next)=>{

const {payload}=req.body;

SubscribeEvents(payload);

return res.status(200).json(payload);


  })}

