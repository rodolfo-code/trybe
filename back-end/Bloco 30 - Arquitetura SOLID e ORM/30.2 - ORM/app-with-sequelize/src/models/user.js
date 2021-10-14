const User = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING
  })

  return user
}

module.exports = User