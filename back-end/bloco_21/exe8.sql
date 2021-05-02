select t1.replacement_cost, t1.film_id, t2.replacement_cost, t2.film_id
from sakila.film as t1, sakila.film as t2
where t1.replacement_cost = t2.replacement_cost;
