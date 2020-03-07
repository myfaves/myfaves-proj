INSERT INTO user_categories (user_id, category_id)
VALUES ($1, $2);
SELECT * FROM user_categories WHERE user_id = $1
ORDER BY category_id DESC;