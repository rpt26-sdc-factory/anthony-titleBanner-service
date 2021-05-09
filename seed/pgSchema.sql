-- Start Time
SELECT now();

-- TITLES
DROP DATABASE IF EXISTS titles_database;
CREATE DATABASE titles_database;

\c titles_database

CREATE TABLE titles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);

-- COPY CSV to POSTGRES DATABASE
\copy titles FROM 'seed/__data__/titles.csv' WITH (FORMAT csv, HEADER);


-- ENROLLED NUMBERS
DROP DATABASE IF EXISTS enrolled_database;
CREATE DATABASE enrolled_database;

\c enrolled_database

CREATE TABLE enrolled(
  id SERIAL PRIMARY KEY,
  enrolled VARCHAR(255)
);

-- COPY CSV to POSTGRES DATABASE
\copy enrolled FROM 'seed/__data__/enrolled.csv' WITH (FORMAT csv, HEADER);

-- connect back to postgres database
\c postgres

-- End Time
SELECT now();


-- login command: psql -U postgres
-- create databases & tables command: \i seed/pgSchema.sql