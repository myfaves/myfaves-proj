SELECT * FROM favorites f
JOIN categories c ON (f.category_id = c.category_id)
WHERE f.user_id = $1;