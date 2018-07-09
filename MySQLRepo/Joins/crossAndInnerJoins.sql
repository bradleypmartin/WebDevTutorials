-- Let's think about gathering all orders for a given user.
-- We could do a query on customers for customer ID, then do another
-- query for orders with that customer ID in orders. BUT we can do this
-- more efficiently with joins.

-- Cross joins are very inefficient: we're completing a Cartesian product
-- of these tables (commented out).
-- SELECT * FROM customers, orders;

-- IMPLICIT INNER JOIN (less efficient)
-- Can also pare down the Cartesian product:
SELECT first_name, last_name, order_date, amount
FROM customers, orders
WHERE customers.id = orders.customer_id;

-- EXPLICIT INNER JOIN (more efficient)
SELECT first_name, last_name, order_date, amount FROM customers
JOIN orders
    ON customers.id = orders.customer_id;