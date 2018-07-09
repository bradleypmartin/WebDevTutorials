-- Exercise 2 (1 was pretty simple and in-console)
-- select all books written before 1980 (non-inclusive)
SELECT title, released_year
FROM books
WHERE released_year < '1980';

-- Exercise 3: select all books written by Eggers or Chabon
SELECT title, author_lname
FROM books
WHERE author_lname IN ('Eggers','Chabon');

-- Exercise 4: select all books written by Lahiri, Published after 2000
SELECT title, author_lname, released_year
FROM books
WHERE author_lname = 'Lahiri' AND released_year > '2000';

-- Exercise 5: select all books with page counts between 100 and 200
SELECT title, pages
FROM books
WHERE pages BETWEEN 100 AND 200;

-- Exercise 6: select all books with author last name starting with 'C' or 'S'
SELECT title, author_lname
FROM books
WHERE author_lname LIKE 'C%' OR author_lname LIKE 'S%';

-- Exercise 7: cases! differentiating book types.
SELECT
    title,
    author_lname,
    CASE
        WHEN title LIKE '%stories%' THEN 'Short Stories'
        WHEN title LIKE '%Just Kids%' OR title LIKE '%A Heartbreaking Work%' THEN 'Memoir'
        ELSE 'Novel'
    END AS 'TYPE'
FROM books;

-- BONUS exercise 8: gather all books by a given author (printing count)
SELECT
    author_fname,
    author_lname,
    CASE
        WHEN COUNT(*) > 1 THEN CONCAT(COUNT(*), ' books')
        ELSE CONCAT(COUNT(*), ' book')
    END AS 'Total books inventoried'
FROM books
GROUP BY author_lname, author_fname;
