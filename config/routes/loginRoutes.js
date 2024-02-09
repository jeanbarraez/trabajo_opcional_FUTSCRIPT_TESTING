import express from "express";
import { loginAdmin } from "../../src/api/v1/controllers/loginControllers.js";
//import { validateFutbol } from "../../VALIDATORS/validate.futbol.js";
import { validparameters } from "../../middlewares/validateParametersLogin.js";

const router = express.Router();

router.post("/login", validparameters /* validateFutbol */, loginAdmin);

export default router;