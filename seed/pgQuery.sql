-- TITLES QUERIES
\c titles_database

-- Get the 10 millionth record
EXPLAIN ANALYZE SELECT * FROM titles WHERE id=10000000;

-- Get the 7.5 millionth record
EXPLAIN ANALYZE SELECT * FROM titles WHERE id=7500000;

-- Get the 5 millionth record
EXPLAIN ANALYZE SELECT * FROM titles WHERE id=5000000;

-- Get the 2.5 millionth record
EXPLAIN ANALYZE SELECT * FROM titles WHERE id=2500000;


-- ENROLLED QUERIES
\c enrolled_database

-- Get the 10 millionth record
EXPLAIN ANALYZE SELECT * FROM enrolled WHERE id=10000000;

-- Get the 7.5 millionth record
EXPLAIN ANALYZE SELECT * FROM enrolled WHERE id=7500000;

-- Get the 5 millionth record
EXPLAIN ANALYZE SELECT * FROM enrolled WHERE id=5000000;

-- Get the 2.5 millionth record
EXPLAIN ANALYZE SELECT * FROM enrolled WHERE id=2500000;

\c postgres

-- run queries command: \i seed/pgQuery.sql















