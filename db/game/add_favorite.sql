INSERT INTO favorite_games (user_id, category_id, name,  image, rating, external_id)
VALUES (${user_id}, ${category_id}, ${name}, ${image}, ${rating}, ${external_id});
SELECT * FROM favorite_games WHERE user_id = ${user_id};