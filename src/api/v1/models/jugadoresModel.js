import pool from "../../../../config/db/conectionDb.js";

export const getPlayers = async (id_equipo) => {

    const SQLquery = {
      text: "SELECT jugadores.name, posiciones.name As posicion FROM jugadores JOIN posiciones ON jugadores.id_position = posiciones.id_position WHERE jugadores.id_equipo  = $1;",
      values: [id_equipo],
    };
    const response = await pool.query(SQLquery);
    console.log("response",response)
    return response.rows;
  };



export const addPlayer = async (id_equipo, name, id_position ) => {
  const SQLquery = {
    text:" INSERT INTO jugadores(id_equipo, name, id_position) VALUES($1, $2, $3) RETURNING *",
    values:[id_equipo, name, id_position]
  }
  const response = await pool.query(SQLquery);
  //console.log("response JUGADOR",response)
  return response.rows[0];
    
}


