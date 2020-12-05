const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76



const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5



const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer);



// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'laranja', 'pera'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));





const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a:name, b:classAssigned, c:subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática




const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas




const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ firstCountry, secondCountry, thirdCountry, fourthCountry ] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada



