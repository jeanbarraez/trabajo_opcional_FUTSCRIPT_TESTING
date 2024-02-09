import { getTeams, addTeam } from "../../../../src/api/v1/models/equiposModel.js"
import { findError } from "../utils/utils.js";

export const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await getTeams()
        res.status(200).json(equipos) 
    } catch (error) {
        console.log(error);
        const errorFound = findError(error.code);
        return res
          .status(errorFound[0]?.status)
          .json({ error: errorFound[0]?.message });
        
    }
}

export const agregarEquipo = async (req, res) => {
    try {
        const  {name} = req.body
        console.log("nombre",name)
    await addTeam(name)
    res.status(201).send({ message: "Equipo agregado con éxito" })
    } catch (error) {
        console.log(error);
        const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
        //res.status(500).json({ error: error.message });    
    }
}