db.restaurants.find({ rating: { $gte: 8 } }).count();
