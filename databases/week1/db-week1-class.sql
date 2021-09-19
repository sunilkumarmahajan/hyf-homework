1. Select the names and phones of all users;
SELECT name, phone FROM user WHERE phone IS NOT NULL;

2. Select the name of the user with id=10;
SELECT name FROM user WHERE id = 10;

3. Find how many users exist in the database;
SELECT COUNT(*) FROM user;

4. Select the names of the first 5 users in the database;
SELECT name FROM user ORDER BY id LIMIT 5;

5. Select the names of the last 3 users in the database;
SELECT id, name FROM user ORDER BY id DESC LIMIT 3;

6. Sum all the ids in the user table;
SELECT SUM(id) FROM user;

7. Select all users and order them alphabetically by name;
SELECT name FROM user ORDER BY name;

8. Find all tasks that include SQL either on the title or on the description;
SELECT * FROM task WHERE title LIKE "%SQL%" or description LIKE "%SQL%";

9. Find the title of all tasks that the user Maryrose is responsible for;
SELECT title FROM task, user WHERE user.id=task.user_id
AND user.name like "%Maryrose%";

SELECT  title from task where user_id =
(SELECT id from user WHERE name like "%Maryrose%");


10. Find how many tasks each user is responsible for;
SELECT user_id, COUNT(*) as NoOftasks FROM task GROUP BY user_id;

11.Find how many tasks with a status=Done each user is responsible for;
SELECT  user_id, COUNT(user_id) as NoOftasks from task
WHERE status_id =  (SELECT id from status WHERE name = "Done")
GROUP BY user_id ORDER BY user_id;