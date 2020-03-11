INSERT INTO favorites (user_id, category_id, name,  image, rating, external_id)
VALUES (${user_id}, ${category_id}, ${name}, ${image}, ${rating}, ${external_id});
SELECT * FROM favorites WHERE user_id = ${user_id};