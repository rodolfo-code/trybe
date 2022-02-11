select a.actor_id, a.first_name, fa.film_id, f.title
from sakila.actor as a
inner join sakila.film_actor as fa on a.actor_id = fa.actor_id
inner join sakila.film as f on fa.film_id = f.film_id;
