const rs = require('fs/promises');

async function deleteRecipe(id) {
  const recipes = await rs.readFile('./recipe.json', 'utf-8');
  const parsed = JSON.parse(recipes);
  const deletedId = parsed.filter((recipe) => recipe.id !== id);
  if (deletedId) {
    await rs.writeFile('./recipe.json', JSON.stringify(deletedId));
    return parsed.id === id;
  } else {
    return;
  }
}

deleteRecipe(12345).then((data) => console.log(data));

// module.exports = { deleteRecipe };
