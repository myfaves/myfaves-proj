CREATE TABLE IF NOT EXISTS users 
(user_id SERIAL PRIMARY KEY,
email VARCHAR(250),
hash VARCHAR(2500), 
first_name VARCHAR(250),
last_name VARCHAR(250),
age INTEGER);

CREATE TABLE IF NOT EXISTS categories
(category_id SERIAL PRIMARY KEY,
category_name VARCHAR(250));

CREATE TABLE IF NOT EXISTS user_categories
(user_category_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
category_id INTEGER REFERENCES categories(category_id));

CREATE TABLE IF NOT EXISTS favorites
(favorite_id SERIAL PRIMARY KEY,
category_id INTEGER REFERENCES categories(category_id),
user_id INTEGER REFERENCES users(user_id),
name VARCHAR(250),
image VARCHAR(2500),
rating INTEGER,
external_id INTEGER);

CREATE TABLE IF NOT EXISTS friends
(friend_junction_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
friend_id INTEGER REFERENCES users(user_id));

SELECT * FROM users;
SELECT * FROM categories;
SELECT * FROM user_categories;
SELECT * FROM favorite_movies;