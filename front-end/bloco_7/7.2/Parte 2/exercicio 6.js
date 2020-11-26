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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
function studentCount(allLessons) {
  const student1 = allLessons.lesson1.numeroEstudantes;
  const student2 = allLessons.lesson2.numeroEstudantes;
  const student3 = allLessons.lesson3.numeroEstudantes;
  console.log(`O numero total de alunos é de ${student1 + student2 + student3}.`)
}
studentCount(allLessons)
