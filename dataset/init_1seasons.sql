CREATE TABLE seasons (
    year INTEGER PRIMARY KEY,
    url VARCHAR(255)
);

COPY seasons FROM '/docker-entrypoint-initdb.d/csv/seasons.csv'

DELIMITER ','

null '\N'

CSV HEADER;