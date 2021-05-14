-- Start Time
SELECT EXTRACT(MILLISECONDS FROM now());

-- TITLES
DROP DATABASE IF EXISTS sdc_database;

CREATE DATABASE sdc_database;

\c sdc_database

CREATE TABLE titles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  enrolled INT
);

-- COPY CSV to POSTGRES DATABASE
\copy titles (title, enrolled) FROM 'seed/__data__/data.csv' WITH (FORMAT csv, HEADER);

-- CREATE INDEX title_idx ON titles (title);

-- connect back to postgres database
\c postgres

-- End Time
SELECT EXTRACT(MILLISECONDS FROM now());


-- login command: psql
-- kill all postgres connections: sudo pkill -u postgres
-- create databases & tables command: \i seed/pgSchema.sql