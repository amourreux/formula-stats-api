CREATE TABLE lap_times (
    race_id INTEGER,
    driver_id INTEGER,
    lap INTEGER,
    position INTEGER,
    time INTERVAL,
    milliseconds INTEGER,
    PRIMARY KEY (race_id, driver_id, lap),
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_driverId FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

COPY lap_times FROM '/docker-entrypoint-initdb.d/csv/lap_times.csv'

DELIMITER ','

null '\N'

CSV HEADER;