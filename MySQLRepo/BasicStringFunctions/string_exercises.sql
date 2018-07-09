-- Ex 1: reversing the string 'Why does my cat look at me with so much hatred?'
SELECT REVERSE(UPPER('Why does my cat look at me with so much hatred?'))
    AS 'Exercise 1 (string reversal and uppercasing)';
    
-- Ex 2: What does this print out?
SELECT
    REPLACE
    (CONCAT('I', ' ', 'like', ' ', 'cats'), ' ', '_')
    AS 'Ex. 2: concatenation and replacement';
    
-- Solution: this is going to change the concatenation 'I like cats' into
--           'I_like_cats'.

-- Ex 3: Replacing spaces in book titles (from book-data) with ->
SELECT
    REPLACE(title,' ','->')
    AS 'Ex. 3: replacing table string data'
FROM books;
    
-- Ex 4: Reversing last names
SELECT
    author_lname AS 'forwards',
    REVERSE(author_lname) AS 'backwards'
FROM books;
    
-- Ex. 5: concatenating full name in caps
SELECT
    CONCAT(
        UPPER(author_fname),
        ' ',
        UPPER(author_lname)
    )
    AS 'full name in caps'
FROM books;

-- Ex. 6: creating blurb about books
SELECT
    CONCAT(
    title,
    ' was released in ',
    released_year
    )
    AS 'blurb'
FROM books;

-- Ex. 7: printing book titles and length of each title
SELECT
    title,
    CHAR_LENGTH(title) AS 'character count'
FROM books;

-- Ex. 8: printing short title, author, and quantity
SELECT
    CONCAT(
        SUBSTR(title,1,10),
        '...'
    ) AS 'short title',
    
    CONCAT(
        author_lname,
        ', ',
        author_fname
    )
    AS 'author',
    
    stock_quantity
    AS 'quantity'
FROM books;


    
