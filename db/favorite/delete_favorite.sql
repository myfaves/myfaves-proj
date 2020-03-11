DELETE FROM favorites
WHERE favorite_id = $2;
SELECT * FROM favorites WHERE user_id = $1;