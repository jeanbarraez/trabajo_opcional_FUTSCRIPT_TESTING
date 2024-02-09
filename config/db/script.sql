CREATE DATABASE futscript;
\c futscript;

CREATE TABLE equipos (id_equipo SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id_position SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id_equipo), name VARCHAR(250), id_position INT REFERENCES posiciones(id_position));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');


INSERT INTO equipos VALUES
(DEFAULT,'VENEZUELA'),
(DEFAULT,'CHILE'),
(DEFAULT,'ECUADOR'),
(DEFAULT,'ARGENTINA');

INSERT INTO jugadores VALUES
    (DEFAULT, 1, 'salomon ', 1),
    (DEFAULT, 2, 'alexis', 2),
    (DEFAULT, 3, 'Angelo', 3),
    (DEFAULT, 4, 'Emilio', 4);
    (DEFAULT, 4, 'Benzema', 1);



    DELETE FROM jugadores WHERE id = 2;
    DELETE
    SELECT * FROM equipos

    SELECT jugadores.name AS name, posiciones.name AS posicion FROM jugadores INNER JOIN posiciones ON posiciones.id_position = jugadores.id_position; 

    SELECT jugadores.name AS name, posiciones.name AS posicion FROM jugadores INNER JOIN posiciones ON posiciones.id_position = jugadores.id_position WHERE jugadores.id_equipo = equipos.id_equipos;