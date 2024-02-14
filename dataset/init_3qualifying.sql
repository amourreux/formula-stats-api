CREATE TABLE qualifying (
    id SERIAL PRIMARY KEY,
    race_id INTEGER,
    driver_id INTEGER,
    constructor_id INTEGER,
    number INTEGER,
    position INTEGER,
    q1 VARCHAR(10),
    q2 VARCHAR(10),
    q3 VARCHAR(10),
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id),
    CONSTRAINT fk_constructorId FOREIGN KEY (constructor_id) REFERENCES constructors(id)
);

COPY qualifying FROM '/docker-entrypoint-initdb.d/csv/qualifying.csv'

DELIMITER ','

null '\N'

CSV HEADER;