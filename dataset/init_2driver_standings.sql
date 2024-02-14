CREATE TABLE driver_standings (
    id SERIAL PRIMARY KEY,
    race_id INTEGER,
    driver_id INTEGER,
    points FLOAT,
    position INTEGER,
    positionText VARCHAR(10),
    wins INTEGER,
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

COPY driver_standings FROM '/docker-entrypoint-initdb.d/csv/driver_standings.csv'

DELIMITER ','

null '\N'

CSV HEADER;