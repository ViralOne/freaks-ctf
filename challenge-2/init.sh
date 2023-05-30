#!/bin/bash

CREATE USER 'admindb'@'localhost' IDENTIFIED BY 'Passw0rd';
GRANT ALL PRIVILEGES ON workers.* TO 'admindb'@'localhost';
FLUSH PRIVILEGES;
SELECT user FROM mysql.user;
