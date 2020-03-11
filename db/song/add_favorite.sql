INSERT INTO favorite_songs (user_id, category_id, name,  image, rating, external_id)
VALUES (${user_id}, ${category_id}, ${name}, ${image}, ${rating}, ${external_id});
SELECT * FROM favorite_songs WHERE user_id = ${user_id};