use sakila;
DELIMITER $$

create procedure MostrarTop10Atores()
begin
	select actor_id, count(*) as 'quantidade de filmes'
    from film_actor
    group by actor_id
    order by count(*) desc
    limit 10;
end $$

DELIMITER ;

CALL MostrarTop10Atores();