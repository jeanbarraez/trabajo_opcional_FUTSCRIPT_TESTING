import express from 'express';
import { isLogin } from "../../middlewares/isLogin.js";

//import { validateFutbol } from "../../VALIDATORS/validate.futbol.js";
import { obtenerEquipos, agregarEquipo } from "../../src/api/v1/controllers/equiposControllers.js";


const router = express.Router();

router.get("/equipos", obtenerEquipos)
router.post("/equipos",isLogin /* ,  validateFutbol */ , agregarEquipo)

export default router;
