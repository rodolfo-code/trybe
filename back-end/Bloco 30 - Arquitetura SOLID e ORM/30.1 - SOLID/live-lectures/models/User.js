const create = async (connection, { username, email, password, role }) => 
connection.execute(
  'INSERT INTO solid_example.users (username, password, role) VALUE (?,?,?,?)',
  [username, email, password, role],
);

module.exports = {
  create,
};