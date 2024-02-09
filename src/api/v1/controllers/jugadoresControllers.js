import {
  getPlayers,
  addPlayer,
} from "../../../../src/api/v1/models/jugadoresModel.js";
import { findError } from "../utils/utils.js";

export const obtenerJugadores = async (req, res) => {
  const { id_equipo } = req.params;
  /* const { name, posicion } = req.query */
  const jugadores = await getPlayers(id_equipo);
  res.status(200).json(jugadores);
};

export const registrarJugador = async (req, res) => {
  try {
    const { id_equipo } = req.params;
    const { name, id_position } = req.body;
    await addPlayer(id_equipo, name, id_position);
    res.status(201).json({ message: "Jugador agregado con éxito" });
  } catch (error) {
    //console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};
