import express from "express";
import cors from "cors";
 //import { logger } from "logger-express";

import equiposRoutes from "./config/routes/equiposRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import jugadoresRoutes from "./config/routes/jugadoresRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// app.use(logger());
app.use("/api/v1", equiposRoutes);
app.use("/api/v1", jugadoresRoutes);
app.use("/api/v1", loginRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));

export default app;