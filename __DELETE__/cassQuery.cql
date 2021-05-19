/* TITLES */
USE titles_database;

tracing on;
SELECT * FROM titles WHERE id=10000000;
SELECT * FROM titles WHERE id=7500000;
SELECT * FROM titles WHERE id=5000000;
SELECT * FROM titles WHERE id=2500000;
tracing off;

/* ENROLLED */
USE enrolled_database;

tracing on;
SELECT * FROM enrolled WHERE id=10000000;
SELECT * FROM enrolled WHERE id=7500000;
SELECT * FROM enrolled WHERE id=5000000;
SELECT * FROM enrolled WHERE id=2500000;
tracing off;

/*
/usr/libexec/java_home -V
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_201`
cassandra -f
cqlsh

SOURCE 'seed/cassQuery.cql'
*/


