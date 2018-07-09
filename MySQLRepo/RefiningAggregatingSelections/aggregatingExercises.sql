-- Exercise 1: print number of books in database.
SELECT
    COUNT(DISTINCT title) AS 'Total books'
FROM books;

-- Exercise 2: print how many books were released each year
SELECT 
    released_year, 
    COUNT(*) AS 'Total releases of year'
FROM books
GROUP BY released_year;

-- Exercise 3: print total books in stock
SELECT
    SUM(stock_quantity) AS 'Total bookstore stock'
FROM books;

-- Exercise 4: avg released year from each author
SELECT
    author_fname,
    author_lname,
    AVG(released_year) AS 'Avg year of release by author'
FROM books
GROUP BY author_fname, author_lname;

-- Exercise 5: print full name of author who wrote longest book
SELECT
    CONCAT
    (
        author_fname,
        ' ',
        author_lname  
    ) AS 'Full name',
    pages
FROM books
ORDER BY pages DESC
LIMIT 1;

-- Exercise 6: printing year, # books, avg pages for all years
SELECT
    released_year,
    COUNT(*) AS '# books',
    AVG(pages) AS 'avg pages'
FROM books
GROUP BY released_year;