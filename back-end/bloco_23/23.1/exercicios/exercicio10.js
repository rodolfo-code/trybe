db.books
  .find({ status: 'MEAP' }, { _id: 1, title: 1, authors: 1, status: 1 })
  .skip(5)
  .limit(10);
