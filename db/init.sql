DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS user_categories;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS genre;

CREATE TABLE IF NOT EXISTS users 
(user_id SERIAL PRIMARY KEY,
email VARCHAR(250),
password VARCHAR(2500), 
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

CREATE TABLE IF NOT EXISTS favorite_movies 
(movie_id SERIAL PRIMARY KEY,
category_id INTEGER REFERENCES categories(category_id),
movie_genre VARCHAR(250),
movie_name VARCHAR(250),
description VARCHAR(250),
post_path VARCHAR(250));


-- CREATE TABLE genre
-- (genre_id SERIAL PRIMARY KEY,
-- genre_name VARCHAR(250));

-- CREATE TABLE products
-- (product_id SERIAL PRIMARY KEY,
-- category_id INTEGER REFERENCES categories(category_id),
-- genre_id INTEGER REFERENCES genre(genre_id),
-- product_name VARCHAR(250));

-- CREATE TABLE user_categories
-- (user_category_id SERIAL PRIMARY KEY,
-- user_id INTEGER REFERENCES users(user_id),
-- category_id INTEGER REFERENCES categories(category_id));

-- CREATE TABLE favorites
-- (favorite_id SERIAL PRIMARY KEY,
-- user_id INTEGER REFERENCES users(user_id),
-- product_id INTEGER REFERENCES products(product_id));