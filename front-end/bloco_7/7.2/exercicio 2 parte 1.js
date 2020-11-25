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

const addShift = (obj, key, value) => {
  obj[key] = value;
  return obj
};

console.log(addShift(lesson2, 'turno', 'manhã'));

// ou

const addNewKey = (obj, key, value) => {
  let objetoDestino = obj;
  const chave = key;
  const valor = value;
  objetoDestino[chave] = valor
  return objetoDestino
}


console.log(addNewKey(lesson2, 'turno', 'manhã'));