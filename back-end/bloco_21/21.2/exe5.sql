SELECT c.first_name, count(a.address)
FROM sakila.customer c
INNER JOIN sakila.address a ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;
