db.restaurants.count({
  borough: { $in: ['Queens', 'Staten Island', 'Bronx'] },
});
