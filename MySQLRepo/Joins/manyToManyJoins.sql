-- This series of exercises is going to use data inserted in tvSeriesCreation.sql.

-- Our first exercise is going to be a simple listing of all the shows (with
-- show names) and respective reviews.
SELECT
    title, 
    rating
FROM series
JOIN reviews
    ON series.id = reviews.series_id;
    
-- Next, we'll group by average rating (challenge 2).
SELECT
    title, 
    AVG(rating) AS AVG_rating
FROM series
JOIN reviews
    ON series.id = reviews.series_id
GROUP BY series.id
ORDER BY AVG_rating;

-- Now we'll show every reviewer first and last name with review.
SELECT
    first_name, 
    last_name,
    rating
FROM reviewers
JOIN reviews
    ON reviewers.id = reviews.reviewer_id;

-- Next (challenge 4) we're going to tabulate unreviewed series.
SELECT
    title,
    rating
FROM series
LEFT JOIN reviews
    ON series.id = reviews.series_id
WHERE rating IS NULL;

-- Challenge 5: genre average ratings
SELECT
    genre,
    ROUND(AVG(rating),2) AS avg_rating  -- note new 'ROUND' syntax!
FROM series
JOIN reviews
    ON series.id = reviews.series_id
GROUP BY genre;

-- Challenge 6: user stats
SELECT
    first_name,
    last_name,
    COUNT(rating) AS 'rating cnt.',
    IFNULL(MIN(rating),0) AS 'min',
    IFNULL(MAX(rating),0) AS 'max',
    IFNULL(ROUND(AVG(rating),2),0) AS 'avg',
    CASE
        WHEN COUNT(rating) >= 10 THEN 'POWER USER'
        WHEN COUNT(rating) >= 1 THEN 'ACTIVE'
        ELSE 'INACTIVE'
    END AS STATUS
FROM reviewers
LEFT JOIN reviews
    ON reviewers.id = reviews.reviewer_id
GROUP BY reviewers.id;

-- Challenge 7: ordering by series (along with reviewers)
SELECT
    title,
    rating,
    CONCAT(
        first_name,
        ' ',
        last_name
    ) AS 'reviewer'
FROM reviewers
INNER JOIN reviews
    ON reviewers.id = reviews.reviewer_id
INNER JOIN series
    ON series.id = reviews.series_id
ORDER BY title;