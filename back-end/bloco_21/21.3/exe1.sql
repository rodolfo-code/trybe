use sakila;
DELIMITER $$

create procedure ExibeFilmePorId(IN category varchar(100))
begin
	select f.film_id, f.title, fc.category_id, c.name
    from sakila.film as f
    inner join sakila.film_category fc on f.film_id = fc.film_id
    inner join sakila.category as c on c.category_id = fc.category_id
    where c.name = category;
end $$

DELIMITER ;

call ExibeFilmePorId('Action')