INSERT INTO favorite_movies (user_id, category_id, movie_genre, movie_name, description, poster_path)
VALUES (${user_id}, ${category_id}, ${movie_genre}, ${movie_name}, ${description}, ${poster_path});
SELECT * FROM favorite_movies WHERE user_id = ${user_id};