import request from "supertest";
import app from "../../server.js";

import { generateToken } from "../utils.js/login.js";

describe("GET /api/v1/equipos", () => {
  it("It should return an array with a list of equipment", async () => {
    const response = await request(app).get("/api/v1/equipos");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    //expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("POST/api/v1/login", () => {
  it("Submitting the correct credentials in the POST/login route results in an Object", async () => {
    const credentials = {
      username: "admin",
      password: "1234",
    };
    const response = await request(app).post("/api/v1/login").set(credentials);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("POST/api/v1/login", () => {
  it("Submitting incorrect credentials in the POST /login path results in a 400 status code", async () => {
    const credentials = {
      username: "admin",
      password: "1234",
    };
    const response = await request(app).post("/api/v1/login").set(credentials);
    expect(response.status).toBe(400);
  });
});

describe("POST/api/v1/equipos/:id_equipo/jugadores", () => {
  const token = generateToken();
  it("Submitting incorrect credentials in the POST /login path results in a 400 status code", async () => {
    const response = await request(app)
      .post("/api/v1/equipos/:id_equipo/jugadores")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(400);
  });
});

describe("POST/api/v1/equipos/:id_equipo/jugadores", () => {
  const token = generateToken();
  it("POST/api/v1/equipos/:id_equipo/jugadores together with a valid token in the headers you get a status code201", async () => {
    const response = await request(app)
      .post("/api/v1/equipos/5/jugadores")//id_equipo , tiene que existir en la DB
      .set("Authorization", `Bearer ${token}`)
      .send({ name: 'pepito juan', id_position: 4 });//el id_position debe existir en la DB
    expect(response.status).toBe(201);
  });
});

