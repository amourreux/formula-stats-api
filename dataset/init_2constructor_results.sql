CREATE TABLE constructor_results (
    id SERIAL PRIMARY KEY,
    race_id INTEGER,
    constructor_id INTEGER,
    points FLOAT,
    status VARCHAR(50),
    CONSTRAINT fk_raceId FOREIGN KEY (race_id) REFERENCES races(id),
    CONSTRAINT fk_constructorId FOREIGN KEY (constructor_id) REFERENCES constructors(id)
);

COPY constructor_results FROM '/docker-entrypoint-initdb.d/csv/constructor_results.csv'

DELIMITER ','

null '\N'

CSV HEADER;