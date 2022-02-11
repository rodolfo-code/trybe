select first_name, last_name from sakila.staff
union all
select first_name, last_name from sakila.actor;
