--task 1
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 VALUES("Lesson2", "About CRUD primary and foreign key", "2017-10-25 06:54:16", "2017-10-15 13:05:09", "2017-11-15 13:05:09", 2, 1);

--Change the title of a task
UPDATE task SET title="Database-Lesson2" WHERE id=36;

--Change a task due date
UPDATE task SET due_date="2021-09-26" WHERE id=36;

--Change a task status
UPDATE task SET status_id = 3 WHERE id=36;

--Mark a task as complete
UPDATE task SET status_id = 3 WHERE id=35;

--Delete a task
DELETE from task where id=37;

--part 2
--Table: Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE  class(
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
name VARCHAR(255) NOT NULL,
begin_date DATETIME NOT NULL,
end_date DATETIME NOT NULL,
PRIMARY KEY(id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE Table student(
id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255),
phone INT(8),
class_id int(10) UNSIGNED NOT NULL,
PRIMARY KEY (id), 
CONSTRAINT `fk_class`
FOREIGN KEY (class_id) REFERENCES class(id)ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Create an index on the name column of the student table.
CREATE INDEX student_name ON student(name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM ("not-started", "ongoing", "finished");

--part 3
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.id,  task.title, user.email
FROM user, user_task, task WHERE 
user.email LIKE "%@spotify.com" AND
user.id=user_task.user_id AND
user_task.task_id=task.id;

-- using join (Get all the tasks assigned to users whose email ends in @spotify.com)
SELECT * FROM user_task
JOIN task ON task_id=task.id
JOIN user ON user_id=user.id
WHERE user.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name as username, task.id as taskid, task.title as tasktitle,  status.name as statusname
FROM user, user_task, task, status WHERE 
user.name LIKE "Donald Duck" AND
status.name LIKE "Not started" AND
user.id=user_task.user_id AND
user_task.task_id=task.id AND
task.status_id=status.id;

--using Join(Get all the tasks for 'Donald Duck' with status 'Not started')
SELECT * FROM user_task 
JOIN task ON task_id=task.id 
JOIN user ON user_id=user.id 
JOIN status ON status_id=status.id 
WHERE user.name='Donald Duck' AND status.name LIKE "Not started";

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT user.name as username, task.id as taskid, task.title as tasktitle FROM user, user_task, task
WHERE user.name LIKE "Maryrose Meadows" AND
month(task.created)=09 AND
user.id=user_task.user_id AND
user_task.task_id = task.id;

--using Join(Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT * FROM user_task
INNER JOIN task ON task_id=task.id
INNER JOIN user ON user_id=user.id
WHERE user.name='Maryrose Meadows' AND month(task.created) = 09;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. 
SELECT monthname(created) as month, COUNT(*) as taskcount
FROM task GROUP BY monthname(created);


part-4
--customer table
CREATE Table customer (cust_id INT(10)AUTO_INCREMENT, 
cust_name VARCHAR(30) NOT NULL,
cust_address VARCHAR(30),
cust_city VARCHAR(30),
cust_state VARCHAR(30),
cust_postalcode INTEGER(10),
cust_phone INTEGER(10),
cust_email VARCHAR(30), PRIMARY KEY(cust_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--employee table
CREATE Table employee(emp_id INT(10)AUTO_INCREMENT, 
emp_name VARCHAR(30) NOT NULL,
emp_address VARCHAR(30),
emp_city VARCHAR(30),
emp_state VARCHAR(30),
emp_postalcode INTEGER(10),
emp_phone INTEGER(10),
emp_email VARCHAR(30), PRIMARY KEY(emp_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--supplier table
CREATE Table supplier(sup_id INT(10)AUTO_INCREMENT, 
sup_name VARCHAR(30) NOT NULL,
sup_address VARCHAR(30),
sup_city VARCHAR(30),
sup_state VARCHAR(30),
sup_postalcode INTEGER(10),
sup_phone INTEGER(10),
sup_email VARCHAR(30), PRIMARY KEY(sup_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--product_category table
CREATE Table product_category
(prod_cat_id INT(10),
prod_cat_name VARCHAR(30) NOT NULL, PRIMARY KEY(prod_cat_id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;;

--product table
CREATE Table product(prod_id INT(10) AUTO_INCREMENT,
prod_name VARCHAR(30) NOT NULL,
prod_desc VARCHAR(30),
prod_cat_id INT(10),
sup_id INT(10),
PRIMARY KEY(prod_id),
CONSTRAINT `fk_prod_cat` FOREIGN KEY (prod_cat_id) REFERENCES product_category (prod_cat_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_sup_id` FOREIGN KEY (sup_id) REFERENCES supplier(sup_id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--transaction table
CREATE Table transaction(trans_id INT(10) AUTO_INCREMENT,
trans_date DATETIME, 
cust_id INT(10), emp_id INT(10), prod_id INT(10),
trans_qty FLOAT(10), trans_price FLOAT(10),
PRIMARY KEY(trans_id),
CONSTRAINT `fk_cust_id` FOREIGN KEY (cust_id) REFERENCES customer (cust_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_emp_id` FOREIGN KEY (emp_id) REFERENCES employee (emp_id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_prod_id` FOREIGN KEY (prod_id) REFERENCES product (prod_id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
