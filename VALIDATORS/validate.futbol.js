import { check } from "express-validator";
import futbolValidateResult from "../src/api/v1/helpers/validateHelpers.js";

export const validateFutbol = [
  check("id_equipo", "El id_equipo es requerido").not().isEmpty(),
  check("id_position", "El id_position es requerido").not().isEmpty(),
  check("name", "El name es requerido").not().isEmpty(),
  check("admin", "El admin es requerido").not().isEmpty,
  check("password", "El password es requerido").not().isString,
  check("username", "El username es requerido").not().isEmpty,

  (req, res, next) => {
    /* const errors = futbolValidateResult(req, res, next);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); */
  
        futbolValidateResult(req, res, next)
    }
  
];
