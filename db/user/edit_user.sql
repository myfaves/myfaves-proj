UPDATE users
SET (email, first_name, last_name, age) = (${email}, ${first_name}, ${last_name}, ${age})
WHERE user_id = ${user_id}
RETURNING user_id, email, first_name, last_name, age;