CREATE TABLE constructors (
    id SERIAL PRIMARY KEY,
    constructorRef VARCHAR(50),
    name VARCHAR(100),
    nationality VARCHAR(50),
    url VARCHAR(255)
);

COPY constructors
FROM '/docker-entrypoint-initdb.d/csv/constructors.csv'

DELIMITER ','

null '\N'

CSV HEADER;