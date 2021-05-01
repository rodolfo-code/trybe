select act.actor_id, concat(act.first_name, ' ', act.last_name), film_id 
from sakila.actor as act
inner join sakila.film_actor as fact
on act.actor_id = fact.actor_id;
