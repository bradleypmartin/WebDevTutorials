-- left joins are essentially the union of BOTH using all the info
-- from the first table BUT including intersecting data (if present)
-- from the second, joined table. The users without purchases will be
-- included below.

SELECT * FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id;

-- fancier: special treatment
SELECT
    first_name,
    last_name,
    IFNULL(SUM(amount), 0) AS total_sum  -- checking and filling null sums
FROM customers
LEFT JOIN orders
    ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_sum;

-- now going to think about right joins: taking everything from latter (joined)
-- table along with matching records for customers.
SELECT * FROM customers
RIGHT JOIN orders
    ON customers.id = orders.customer_id;

-- note that this isn't super interesting with no orders that are not associated
-- with a certain customer of record. We set this up so this wouldn't be the
-- case for adding new orders, but it could occur if customer data were deleted
-- or order data got corrupted.








