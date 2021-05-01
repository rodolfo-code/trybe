select s.first_name, s.last_name, a.address 
from sakila.staff as s
inner join sakila.address as a on s.address_id = a.address_id;
