DROP KEYSPACE IF EXISTS titles_database;
CREATE KEYSPACE titles_database WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE titles_database;

CREATE TABLE titles(
  id int PRIMARY KEY,
  title text
  );

COPY titles FROM '__data__/titles.csv' WITH DELIMITER='|' AND HEADER=TRUE

DROP KEYSPACE IF EXISTS enrolled_database;
CREATE KEYSPACE enrolled_database WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE enrolled_database;

CREATE TABLE enrolled(
  id int PRIMARY KEY,
  enrolled varint
  );

COPY enrolled FROM '__data__/enrolled.csv' WITH DELIMITER='|' AND HEADER=TRUE