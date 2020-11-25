const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  const pizzas = ['muzzarella', 'calabresa'];
  order.order.pizza = {};
  const buyer = order.name = 'Luiz Silva';
  order.order.pizza['muzzarella'] = {
    amount: 1, price: 2
  };
  order.order.pizza['calabresa'] = {
    amout: 1,
    price: 20
  };

  const pizzaUm = Object.keys(order.order.pizza)[0];
  const pizzaDois = Object.keys(order.order.pizza)[1];
  const drink = Object.values(order.order.drinks.coke)[0];
  const totalPrice = order.payment['total'] = 50;
console.log(`Olá ${buyer}, o total do seu pedido de ${pizzaUm}, ${pizzaDois} e ${drink} é R$${totalPrice},00.`)
}

orderModifier(order);