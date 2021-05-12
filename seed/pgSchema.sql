-- Start Time
SELECT EXTRACT(MILLISECONDS FROM now());

-- TITLES
DROP DATABASE IF EXISTS titles_database;
CREATE DATABASE titles_database;

\c titles_database

CREATE TABLE titles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);

-- CREATE INDEX title_idx ON titles (title);

-- COPY CSV to POSTGRES DATABASE
\copy titles (title) FROM 'seed/__data__/titles.csv' WITH (FORMAT csv, HEADER);

-- ENROLLED NUMBERS
DROP DATABASE IF EXISTS enrolled_database;
CREATE DATABASE enrolled_database;

\c enrolled_database

CREATE TABLE enrolled(
  id SERIAL PRIMARY KEY,
  enrolled INT
);

-- CREATE INDEX enrolled_idx ON enrolled (enrolled);

-- COPY CSV to POSTGRES DATABASE
\copy enrolled (enrolled) FROM 'seed/__data__/enrolled.csv' WITH (FORMAT csv, HEADER);

-- connect back to postgres database
\c postgres

-- End Time
SELECT EXTRACT(MILLISECONDS FROM now());


-- login command: psql -U postgres
-- create databases & tables command: \i seed/pgSchema.sql