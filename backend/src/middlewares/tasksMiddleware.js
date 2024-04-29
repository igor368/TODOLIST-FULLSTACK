const validateBody = (request, response, next)=>{
    const {body} = request;

    if(body.title == undefined){
        return response.status(400).json({message:'The field "title" cannot be empty'})
    } 
    if(body.title == ''){
        return response.status(400).json({message:'Title cannot be empty'})
    }

    next();
}

module.exports = {
    validateBody,
}