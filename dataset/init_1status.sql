CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50)
);

COPY status FROM '/docker-entrypoint-initdb.d/csv/status.csv'

DELIMITER ','

null '\N'

CSV HEADER;