DELETE FROM favorite_songs
WHERE movie_id = $2;
SELECT * FROM favorite_songs WHERE user_id = $1;