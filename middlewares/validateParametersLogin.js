const validparameters = ( req, res, next) =>{
    const{username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({error: "Faltan username o password"});
    }
    next();
}

export { validparameters };