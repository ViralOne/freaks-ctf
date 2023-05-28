-- SQL script: init.sql
CREATE USER 'admindb'@'%' IDENTIFIED BY 'veryhardpwd';
GRANT ALL PRIVILEGES ON *.* TO 'admindb'@'%';
FLUSH PRIVILEGES;
CREATE DATABASE workers;
USE workers;
SOURCE /docker-entrypoint-initdb.d/dump.sql;