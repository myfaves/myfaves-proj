DELETE FROM favorite_movies
WHERE movie_id = $2;
SELECT * FROM favorite_movies WHERE user_id = $1;