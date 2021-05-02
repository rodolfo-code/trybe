select t1.title, t1.rental_duration, t2.title, t2.rental_duration
from sakila.film as t1, sakila.film as t2
where t1.length = t2.length
having t1.rental_duration between 2 and 4;
