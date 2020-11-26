
function contem(mat, not) {
  const materia = [ 'materia', 'Matemática', 'noite' ];
  let inclui = materia.includes(mat) && materia.includes(not)
  return inclui;
}

console.log(contem('materia', 'noite'))
