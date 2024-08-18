-- db/schema.sql
DROP DATABASE IF EXISTS seconds_db;
CREATE DATABASE seconds_db;

\c seconds_db;

CREATE TABLE restaurants (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 img TEXT,
 cuisine VARCHAR(100),
 street1 VARCHAR(100),
 street2 VARCHAR(100),
 city VARCHAR(100),
 state VARCHAR(2),
 zipcode INTEGER

);


CREATE TABLE food (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 restaurant_food_id VARCHAR(100),
 rating INTEGER,
 seconds BOOLEAN,
 img TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 notification_date TIMESTAMP,
restaurant_id INTEGER REFERENCES restaurants (id)
 ON DELETE CASCADE
);