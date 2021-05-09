/* TITLES */
DROP KEYSPACE IF EXISTS titles_database;
CREATE KEYSPACE titles_database WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE titles_database;

CREATE TABLE titles(
  id int PRIMARY KEY,
  title text
  );

COPY titles (id, title) FROM 'seed/__data__/titles.csv' WITH DELIMITER=',' AND HEADER=TRUE;

/* ENROLLED */
DROP KEYSPACE IF EXISTS enrolled_database;
CREATE KEYSPACE enrolled_database WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE enrolled_database;

CREATE TABLE enrolled(
  id int PRIMARY KEY,
  enrolled varint
  );

COPY enrolled (id, enrolled) FROM 'seed/__data__/enrolled.csv' WITH DELIMITER=',' AND HEADER=TRUE;

/*
/usr/libexec/java_home -V
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_201`
cassandra -f
cqlsh

SOURCE 'seed/cassSchema.cql'
*/