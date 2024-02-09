import express from "express";
import {
  obtenerJugadores,
  registrarJugador,
} from "../../src/api/v1/controllers/jugadoresControllers.js";
import { isLogin } from "../../middlewares/isLogin.js";

//import { validateFutbol } from "../../VALIDATORS/validate.futbol.js";

const router = express.Router();

router.get("/equipos/:id_equipo/jugadores", obtenerJugadores);
router.post(
  "/equipos/:id_equipo/jugadores",
  isLogin /* validateFutbol */,
  registrarJugador
);

export default router;
