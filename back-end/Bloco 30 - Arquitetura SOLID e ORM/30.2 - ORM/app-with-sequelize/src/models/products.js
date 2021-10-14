const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    productName: DataTypes.STRING,
    productQuantity: DataTypes.STRING,
    product_category: DataTypes.STRING
  })

  return Product
}

module.exports = Product;

