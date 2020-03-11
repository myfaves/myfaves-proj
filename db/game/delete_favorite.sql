DELETE FROM favorite_games
WHERE movie_id = $2;
SELECT * FROM favorite_games WHERE user_id = $1;