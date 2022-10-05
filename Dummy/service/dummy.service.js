
export const removeFunc=()=>{

}

export const SubscribeEvents=(payload)=>{

    const {event,data}=payload;

    const{userid,product,order,qty}=data;



    switch(event){
        case 'test':
        console.log("test");   
        break;
        default:
            break;
    }
}