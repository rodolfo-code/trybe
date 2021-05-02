(select first_name, last_name from sakila.customer order by first_name limit 60)
union
(select first_name, last_name from sakila.actor order by first_name limit 60)
order by first_name limit 15 offset 45;
