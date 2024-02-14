CREATE TABLE races (
    id SERIAL PRIMARY KEY,
    year INTEGER,
    round INTEGER,
    circuit_id INTEGER,
    name VARCHAR(100),
    date DATE,
    time TIME,
    url VARCHAR(255),
    fp1_date DATE,
    fp1_time TIME,
    fp2_date DATE,
    fp2_time TIME,
    fp3_date DATE,
    fp3_time TIME,
    quali_date DATE,
    quali_time TIME,
    sprint_date DATE,
    sprint_time TIME,
    CONSTRAINT fk_circuitId FOREIGN KEY (circuit_id) REFERENCES circuits (id)
);

COPY races FROM '/docker-entrypoint-initdb.d/csv/races.csv'

DELIMITER ','

null '\N'

CSV HEADER;