const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const cadastro = {};

function newObject(objeto, chave, valor) {
  objeto = {}
  const novoObjeto = Object.create(objeto)

  let novaChave = chave;
  let primeiroNome = valor;
  novoObjeto[novaChave] = primeiroNome
  return novoObjeto
}

console.log(newObject('cadastro', 'primeiroNome', 'Rodolfo'));