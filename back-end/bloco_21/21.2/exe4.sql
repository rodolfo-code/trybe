select c.first_name, c.email, c.address_id, a.address, a.district
from sakila.customer as c
inner join sakila.address as a 
on a.address_id = c.address_id
where
	a.district = 'California'
    and c.first_name like '%ene%';
