select first_name from sakila.customer where first_name like '%tracy%'
union
select first_name from sakila.actor where first_name like '%je%'
