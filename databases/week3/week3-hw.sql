--meal table
CREATE Table meal(id INT(10) UNSIGNED AUTO_INCREMENT, title VARCHAR(255) NOT NULL, description TEXT (255), location VARCHAR(255), 
when_date DATETIME NOT NULL, max_reservations INT(10), price DECIMAL(10, 2), created_date DATE, 
CONSTRAINT pk_id PRIMARY KEY (id)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--reservation table
CREATE Table reservation(id INT(10) UNSIGNED AUTO_INCREMENT, number_of_guests INT(10) UNSIGNED NOT NULL, meal_id INT(10) UNSIGNED, 
created_date DATE, contact_phonenumber VARCHAR(255), contact_name VARCHAR(255), contact_email VARCHAR(255), 
CONSTRAINT pk_res PRIMARY KEY(id), 
CONSTRAINT fk_res FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--review table
CREATE Table review (id INT(10) UNSIGNED AUTO_INCREMENT, title VARCHAR(255), description TEXT NOT NULL, meal_id int(10) UNSIGNED, 
stars INT(10) UNSIGNED, created_date DATE, 
CONSTRAINT pk_rev PRIMARY KEY(id), 
CONSTRAINT fk_rev FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE ON UPDATE CASCADE) 
ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--insert data into meal table
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("veg-menu", "veg biryani, gravy, raitha", "vaerebro", "2021-10-10", 25, 150, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("chicken-menu", "chicken biryani, gravy, raitha", "vaerebro", "2021-10-15", 50, 175, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("lamb-menu", "lamb biryani, gravy, raitha", "vaerebro", "2021-10-15", 50, 200, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("veg-thali", "veg biryani, veg kurma, naan, papad, raitha, mango lassi", "vaerebro", "2021-10-10", 20, 100, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("kids-veg-menu", "veg biryani, gravy, raitha", "vaerebro", "2021-10-10", 15, 60, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("kids-chicken-menu", "chicken biryani, gravy, raitha", "vaerebro", "2021-10-15", 10, 100, "2021-10-05");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date) 
VALUES ("kids-lamb-menu", "lamb biryani, gravy, raitha", "vaerebro", "2021-10-15", 10, 100, "2021-10-04");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ("durum menu", "chicken durum, french fries, coke", "vaerebro", "2021-10-15", 25, 75, "2021-10-07");
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ("pitabrød menu", "chicken pitabrød, french fries, coke", "vaerebro", "2021-10-15", 15, 55, "2021-10-08");
--insert data into reservation table
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (15, 8, "2021-10-05", "45-3499999", "harsha", "harsha@mymail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (10, 5, "2021-10-04", "45-12345612", "sunil mahajan", "sunilmahajan@gmail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (25, 5, "2021-10-04", "45-34561232", "mahajan", "mahajan@gmail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (30, 7, "2021-10-05", "45-12222122", "kumar", "kumar@gmail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (15, 8, "2021-10-04", "45-87678888", "madhav", "madhav@mymail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 6, "2021-10-04", "45-876788888", "madhav", "madhav@mymail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (10, 6, "2021-10-08", "45-22332233", "santosh", "santosh@mymail.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 6, "2021-10-11", "45-5555555", "swapna mahajan", "smahajan@mymail.com");
--insert data into review table
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("excellent", "amazing taste", 8, 5, "2021-10-05");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("super good", "super good taste", 5,3,"2021-10-04");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("ok", "its ok, need to improve the tatse", 7, 1, "2021-10-05");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("excellent", "amazing taste", 8, 5, "2021-10-05");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("excellent", "excellent quality", 7, 7, "2021-10-04");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("excellent", "good quality", 7, 8, "2021-10-06");
--Meal
--Get all meals
SELECT * FROM  meal;
--Add a new meal
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
values ("breakfast menu","idli, dosa, vada, chutney, sambar", "vaerebro", "2021-10-20", 10, 70, "2021-10-04");
--Get a meal with any id, fx 1
SELECT * FROM meal where id=10;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE  meal SET title = "breakfast buffet", description = "idli, masala dosa, vada, chutney, sambar" WHERE id=10;
--Delete a meal with any id, fx 1
DELETE from meal WHERE id=10;
--Reservation
--Get all reservations
SELECT * from reservation;
--Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (30, 2, "2021-10-05", "45-99999999", "msk", "msk@mymail.com");
--Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id=9;
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET contact_name = "sunil Kumar Mahajan", number_of_guests = 10 WHERE id=9;
--Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id=9;
--Review
--Get all reviews
SELECT * FROM review;
--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("average", "average.. needs improve taste", 7,1, "2021-10-04");
--Get a review with any id, fx 1
SELECT * FROM review WHERE id=7;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET title = "amazing", description = "amazing...." WHERE id = 5;
--Delete a review with any id, fx 1
DELETE FROM review WHERE id = 7;
--  Additional queries
--Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
--Get meals that has a price smaller than a specific price fx 90
SELECT title, description,price from meal WHERE price <90;
--Get meals that still has available reservations
SELECT meal.id AS MEAL_ID, reservation.meal_id AS RESERVED_MEAL_ID, 
meal.title AS TITLE, meal.max_reservations AS MAX_AVAILABILITY, reservation.number_of_guests AS RESERVED,
(meal.max_reservations - reservation.number_of_guests) AS STILL_AVAILABLE
from meal, reservation 
WHERE meal.id=reservation.meal_id AND meal.created_date = reservation.created_date
AND meal.max_reservations > (SELECT SUM(reservation.number_of_guests));
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
--*here i am taking partial title as veg*
SELECT id, title, description FROM meal WHERE title LIKE "%veg%";
--Get meals that has been created between two dates
SELECT * FROM meal 
WHERE created_date BETWEEN "2021-10-05" AND "2021-10-08";
--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;
--Get the meals that have good reviews
SELECT  meal.id, meal.title, review.title, review.stars FROM meal, review
where  review.stars>4  AND meal.id=review.meal_id;
--Get reservations for a specific meal sorted by created_date
SELECT meal.id, reservation.meal_id, meal.title, 
reservation.number_of_guests, reservation.created_date FROM meal, reservation
WHERE meal.title LIKE "kids-lamb-menu" and meal.id=reservation.meal_id
ORDER BY reservation.created_date;
--Sort all meals by average number of stars in the reviews
SELECT meal.id, meal.title, AVG(stars) AS AVG_STARS 
FROM meal, review 
WHERE meal.id=review.meal_id
GROUP BY meal.id ORDER BY AVG(stars);
--to cross check the average
SELECT meal.id, meal.title, stars, sum(stars), COUNT(stars), AVG(stars) 
FROM meal, review 
WHERE meal.id=review.meal_id
GROUP BY meal.id ORDER BY AVG(stars);