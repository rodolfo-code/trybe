const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

// const User = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     name: DataTypes.STRING,
//     password: DataTypes.STRING,
//   });

//   return User;
// };

module.exports = User;
