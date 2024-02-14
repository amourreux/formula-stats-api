CREATE TABLE constructor_standings (
    id SERIAL PRIMARY KEY,
    race_id INTEGER NOT NULL,
    constructor_id INTEGER NOT NULL,
    points FLOAT,
    position INTEGER,
    positionText VARCHAR(10),
    wins INTEGER,
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_constructorId FOREIGN KEY (constructor_id) REFERENCES constructors(id)
);

COPY constructor_standings FROM '/docker-entrypoint-initdb.d/csv/constructor_standings.csv'

DELIMITER ','

null '\N'

CSV HEADER;