-- Exercise 1: What is a good use case for CHAR?

-- ANS: CHAR is used when you're frequently going to be putting a constant
--      number of characters into a given column (for instance, state
--      abbreviations or 'Y'/'N' responses).

-- Exercise 2: Fill in the blank exercise!
CREATE TABLE inventory (
    item_name VARCHAR(30) NOT NULL DEFAULT 'unlabeled',
    price DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    quantity INT NOT NULL DEFAULT 0
);

DESCRIBE inventory;

DROP TABLE inventory;

-- Exercise 3: What's the difference between DATETIME and TIMESTAMP?

-- ANS: TIMESTAMP takes a bit less space and can only hold valid dates/times
--      between around 1970 and 2038 or so (as of today, 4/22/18).

-- Exercise 4: print out current time
SELECT TIME(NOW());

-- Exercise 5: print out current date
SELECT DATE(NOW());

-- Exercise 6: print out the current day of the week as a number
SELECT DATE_FORMAT(NOW(),'%w');

-- Exercise 7: print out English name of the day of the week
SELECT DATE_FORMAT(NOW(),'%W');

-- Exercise 8: print out current day and format with mm/dd/yyyy
SELECT DATE_FORMAT(NOW(), '%m/%d/%y %H:%i:%S');

-- Exercise 9: print out current datetime like 'January 2nd at 3:15'
SELECT DATE_FORMAT(NOW(), '%M %D at %H:%i');

-- Exercise 10: create tweets table
CREATE TABLE tweets (
    content VARCHAR(140) NOT NULL DEFAULT 'test',
    username VARCHAR(50) NOT NULL DEFAULT 'unknown',
    time_updated TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);

DESCRIBE tweets;

DROP TABLE tweets;
