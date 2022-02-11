(select first_name from sakila.actor order by first_name desc limit 5)
union
(select first_name from sakila.staff limit 1)
union
(select first_name from sakila.staff limit 5 offset 15)
order by first_name;
