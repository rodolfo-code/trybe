const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality = 'Brazilian'} = person;
console.log(nationality)



const nationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
};
const { nationality = 'brazilian'} = person;

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};


console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person));