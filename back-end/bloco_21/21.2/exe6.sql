SELECT stf.first_name, stf.last_name, AVG(pay.amount)
FROM staff AS stf
INNER JOIN payment pay ON stf.staff_id = pay.staff_id
WHERE year(pay.payment_date) = 2006
GROUP BY stf.first_name, stf.last_name;
