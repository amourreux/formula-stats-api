CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    race_id INTEGER NOT NULL,
    driver_id INTEGER NOT NULL,
    constructor_id INTEGER NOT NULL,
    number INTEGER,
    grid INTEGER,
    position INTEGER,
    positionText VARCHAR(10),
    positionOrder INTEGER,
    points FLOAT,
    laps INTEGER,
    time INTERVAL,
    milliseconds INTEGER,
    fastestLap INTEGER,
    rank INTEGER,
    fastestLapTime VARCHAR(10),
    fastestLapSpeed VARCHAR(10),
    status_id INTEGER NOT NULL,
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id),
    CONSTRAINT fk_constructorId FOREIGN KEY (constructor_id) REFERENCES constructors(id),
    CONSTRAINT fk_statusId FOREIGN KEY (status_id) REFERENCES status(id)
);

COPY results FROM '/docker-entrypoint-initdb.d/csv/results.csv'

DELIMITER ','

null '\N'

CSV HEADER;