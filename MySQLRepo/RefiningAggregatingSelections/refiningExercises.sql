-- Exercise 1: selecting all books whose title contains 'stories'
SELECT
    title
FROM books
WHERE title LIKE '%stories%';

-- Exercise 2: finding longest book with limit
SELECT title, pages
FROM books
ORDER BY pages DESC
LIMIT 1;

-- Exercise 3: printing summary of 3 most recent books
SELECT
    CONCAT(
        title,
        ' - ',
        released_year
    )
    AS 'summary'
FROM books
ORDER BY released_year DESC
LIMIT 3;

-- Exercise 4: finding all author last names that contain a space ('_')
SELECT
    title, author_lname
FROM books
WHERE author_lname LIKE '% %';

-- Exercise 5: finding 3 books with lowest stock number
SELECT
    title, released_year, stock_quantity
FROM books
ORDER BY stock_quantity
LIMIT 3;

-- Exercise 6: printing all books sorted by lname then title
SELECT
    title, author_lname
FROM books
ORDER BY author_lname, title;

-- Exercise 7: yell mashup of authors sorted by last name
SELECT
    CONCAT(
        'MY FAVORITE AUTHOR IS ',
        UPPER(author_fname),
        ' ',
        UPPER(author_lname),
        '!'
    )
    AS 'yell'
FROM books
ORDER BY author_lname;