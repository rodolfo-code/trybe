db.restaurants.find({ cuisine: { $ne: 'American' } }).count();
