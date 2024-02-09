import { validationResult } from "express-validator";

const futbolValidateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
   // const errors = validationResult(req);
     res.status(403)
    res.send({ error: error.array() }); //informacion al cliente
    //retorna un array con los errores de validacion
  }
};
export default futbolValidateResult;
