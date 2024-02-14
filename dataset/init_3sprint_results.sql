CREATE TABLE sprint_results (
    id SERIAL PRIMARY KEY,
    race_id INTEGER,
    driver_id INTEGER,
    constructor_id INTEGER,
    number INTEGER,
    grid INTEGER,
    position INTEGER,
    positionText VARCHAR(10),
    positionOrder INTEGER,
    points INTEGER,
    laps INTEGER,
    time INTERVAL,
    milliseconds INTEGER,
    fastestLap INTEGER,
    fastestLapTime VARCHAR(10),
    status_id INTEGER,
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id),
    CONSTRAINT fk_constructorId FOREIGN KEY (constructor_id) REFERENCES constructors(id),
    CONSTRAINT fk_statusId FOREIGN KEY (status_id) REFERENCES status(id)
);

COPY sprint_results FROM '/docker-entrypoint-initdb.d/csv/sprint_results.csv'

DELIMITER ','

null '\N'

CSV HEADER;