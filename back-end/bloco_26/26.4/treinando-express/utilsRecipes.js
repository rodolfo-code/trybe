const rs = require('fs/promises');

async function deleteRecipe(id) {
  const recipes = await rs.readFile('./recipe.json', 'utf-8');
  const parsed = JSON.parse(recipes);
  const deletedId = parsed.findIndex((recipe) => recipe.id === id);
  console.log(deletedId);
  if (deletedId === -1) {
    return null;
  }
  const deletedElement = parsed.splice(deletedId, 1);
  await rs.writeFile('./recipe.json', JSON.stringify(parsed));
  return deletedElement;
}

// deleteRecipe(1).then((data) => console.log(data));

module.exports = { deleteRecipe };

// [
//   {
//     "id":12345,
//     "name":"farofa de bacon",
//     "ingredientes":["farofa", "bacon"]
//   },
//   {
//     "id":12346,
//     "name":"ovo mexido",
//     "ingredientes":["ovo"]
//   }
// ]
