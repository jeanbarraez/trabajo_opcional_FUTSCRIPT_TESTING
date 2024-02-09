import pool from "../../../../config/db/conectionDb.js";

export const getTeams = async () => {
    const allTeams ={
        text: "SELECT * FROM equipos",
    }
    const response = await pool.query(allTeams);
    return response.rows;
    //console.log("response",response)
}

export const addTeam = async (name) => {
    const SQLquery={
        text: "INSERT INTO equipos (name) VALUES ($1) RETURNING *",
        values: [name],
    }
    const response = await pool.query(SQLquery);
    return response.rows;
    //console.log("response",response)
    
}