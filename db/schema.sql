use mk0n995u09yeo78v;

DROP TABLE if exists burgers;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);