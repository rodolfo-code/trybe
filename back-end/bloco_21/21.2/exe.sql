select c.customer_id, c.first_name, c.email, a.address_id, a.address
from sakila.customer as c
inner join sakila.address as a
on a.address_id = c.address_id
order by c.first_name desc limit 100;
