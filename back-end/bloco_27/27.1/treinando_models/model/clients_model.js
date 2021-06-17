const connection = require('./connection');

async function getAll() {
  try {
    const db = await connection();
    return db.collection('clients').find({}).toArray();
  } catch (_err) {
    return null;
  }
}

async function add(body) {
  try {
    const db = await connection();
    const result = await db.collection('clients').insertOne(body);
    return result.ops[0];
  } catch (err) {
    return null;
  }
}

module.exports = { getAll, add };
