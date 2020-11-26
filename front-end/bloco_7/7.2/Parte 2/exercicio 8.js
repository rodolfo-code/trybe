const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function containKeyValue(obj, key, value) {
    let arrayKeyValue = Object.entries(obj);
    let include = false;
    for(let index in arrayKeyValue) {
      if(arrayKeyValue[index].includes(key) && arrayKeyValue[index].includes(value)) {
        include = true;
      }
      
    }
  return include
}
console.log(containKeyValue(lesson3, 'turno', 'noite'))

// OU

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));