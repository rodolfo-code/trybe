SELECT id, title
FROM hotel.Books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.Books_Lent
    WHERE b.Id = book_id
);

