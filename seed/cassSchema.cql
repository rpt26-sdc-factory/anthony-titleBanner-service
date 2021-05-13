DROP KEYSPACE IF EXISTS sdc_database;

CREATE KEYSPACE sdc_database WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE sdc_database;

CREATE TABLE titles(
  id int PRIMARY KEY,
  title text,
  enrolled varint
  );

COPY titles (id, title, enrolled) FROM 'seed/__data__/cassData.csv' WITH DELIMITER=',' AND HEADER=TRUE;


/*
/usr/libexec/java_home -V
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_201`
cassandra -f
cqlsh

SOURCE 'seed/cassSchema.cql'
*/