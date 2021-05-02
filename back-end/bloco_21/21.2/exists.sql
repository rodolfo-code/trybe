SELECT id, title
FROM hotel.Books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id
);

SELECT id, title
FROM hotel.books b
WHERE EXISTS(
    SELECT *
    FROM hotel.books_lent
    WHERE b.Id = book_id AND b.title like '%lost%'
);