-- Here we're going to do some exercises with the IG data and schema.

-- CHALLENGE 1 -- FIND 5 OLDEST USERS.
SELECT
    username,
    DATEDIFF(NOW(),created_at) AS user_days
FROM users
ORDER BY user_days DESC
LIMIT 3;

-- CHALLENGE 2 -- WHAT DAY OF THE WEEK DO MOST USERS REGISTER ON?
SELECT
    DATE_FORMAT(created_at, '%a') AS day_registered,
    COUNT(*) as total_registered
FROM users
GROUP BY day_registered
ORDER BY total_registered DESC;

-- CHALLENGE 3 -- FIND USERS THAT HAVE NEVER POSTED A PHOTO
SELECT 
    username
FROM users
LEFT JOIN photos
    ON users.id = photos.user_id
WHERE photos.id IS NULL;

-- CHALLENGE 4 -- WHO CAN GET THE MOST LIKES ON A SINGLE PHOTO?
SELECT
    username,
    image_url,
    COUNT(*) AS num_likes
FROM likes
INNER JOIN photos
    ON likes.photo_id = photos.id
INNER JOIN users
    ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY num_likes DESC
LIMIT 3;

-- CHALLENGE 5 -- HOW MANY TIMES DOES THE AVERAGE USER POST?
SELECT
    (SELECT COUNT(*) FROM photos)/(SELECT COUNT(*) FROM users) AS avg_posts;
    
-- CHALLENGE 6 -- MOST COMMONLY USED HASHTAGS
SELECT
    tags.tag_name,
    COUNT(*) AS tag_count
FROM photo_tags
JOIN tags
    ON photo_tags.tag_id = tags.id
GROUP BY tag_id
ORDER BY tag_count DESC
LIMIT 5;

-- CHALLENGE 7 -- FIND BOTS! (USERS WHO HAVE LIKED EVERY PHOTO)
SELECT
    username,
    user_id,
    COUNT(*) AS num_likes
FROM users
INNER JOIN likes
    ON users.id = likes.user_id
GROUP BY likes.user_id
HAVING num_likes = (SELECT COUNT(*) FROM photos);