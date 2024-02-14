CREATE TABLE pit_stops (
    race_id INTEGER,
    driver_id INTEGER,
    stop INTEGER,
    lap INTEGER,
    time TIME,
    duration INTERVAL,
    milliseconds INTEGER,
    PRIMARY KEY (race_id, driver_id, stop),
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

COPY pit_stops FROM '/docker-entrypoint-initdb.d/csv/pit_stops.csv'

DELIMITER ','

null '\N'

CSV HEADER;