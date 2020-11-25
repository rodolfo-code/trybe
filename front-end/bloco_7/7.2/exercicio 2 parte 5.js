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

// erroneamente achei eu que era para ser feito uma função

function allObjects(obj1, obj2, obj3) {
  let allLessons = {}
  allLessons['lesson1'] = Object.assign(obj1);
  allLessons['lesson2'] = Object.assign(obj2);
  allLessons['lesson3'] = Object.assign(obj3);
  return allLessons
};
console.log(allObjects(lesson1, lesson2, lesson3));

// era para ser feito apenas um objeto

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons)