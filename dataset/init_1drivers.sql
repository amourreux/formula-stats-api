CREATE TABLE drivers (
    id SERIAL PRIMARY KEY,
    driverRef VARCHAR(50),
    number INTEGER,
    code VARCHAR(5),
    forename VARCHAR(50),
    surname VARCHAR(50),
    dob DATE,
    nationality VARCHAR(50),
    url VARCHAR(255)
);

COPY drivers FROM '/docker-entrypoint-initdb.d/csv/drivers.csv'

DELIMITER ','

null '\N'

CSV HEADER;

CREATE INDEX idx_driverId ON drivers(id);
