INSERT INTO users
(email, first_name, last_name, age, hash)
VALUES
(${email}, ${first_name}, ${last_name}, ${age}, ${hash})
RETURNING user_id, email, first_name, last_name, age;