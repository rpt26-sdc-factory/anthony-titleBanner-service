-- Start Time
SELECT EXTRACT(MILLISECONDS FROM now());

-- TITLES QUERIES
\c titles_database

-- Get the 10 millionth record
SELECT * FROM titles WHERE id=10000000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 7.5 millionth record
SELECT * FROM titles WHERE id=7500000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 5 millionth record
SELECT * FROM titles WHERE id=5000000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 2.5 millionth record
SELECT * FROM titles WHERE id=2500000;
SELECT EXTRACT(MILLISECONDS FROM now());


-- ENROLLED QUERIES
\c enrolled_database

-- Get the 10 millionth record
SELECT * FROM enrolled WHERE id=10000000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 7.5 millionth record
SELECT * FROM enrolled WHERE id=7500000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 5 millionth record
SELECT * FROM enrolled WHERE id=5000000;
SELECT EXTRACT(MILLISECONDS FROM now());

-- Get the 2.5 millionth record
SELECT * FROM enrolled WHERE id=2500000;
SELECT EXTRACT(MILLISECONDS FROM now());

\c postgres
















