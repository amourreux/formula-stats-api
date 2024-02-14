CREATE TABLE circuits (
    id SERIAL PRIMARY KEY,
    circuitRef VARCHAR(50),
    name VARCHAR(100),
    location VARCHAR(100),
    country VARCHAR(50),
    lat FLOAT,
    lng FLOAT,
    alt INTEGER,
    url VARCHAR(255)
);

COPY circuits FROM '/docker-entrypoint-initdb.d/csv/circuits.csv'

DELIMITER ','

null '\N'

CSV HEADER;