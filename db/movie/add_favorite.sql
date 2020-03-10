INSERT INTO favorite_movies (user_id, category_id, name,  image, rating, external_id)
VALUES (${user_id}, ${category_id}, ${name}, ${image}, ${rating}, ${external_id});
SELECT * FROM favorite_movies WHERE user_id = ${user_id};