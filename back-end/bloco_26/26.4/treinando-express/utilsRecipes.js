const fs = require('fs/promises');

const readFile = async () => {
  const recipes = await fs.readFile('./recipe.json', 'utf-8');
  const parsed = JSON.parse(recipes);
  return parsed;
};

const writeFile = async (newFile) => {
  return await fs.writeFile('./recipe.json', JSON.stringify(newFile));
};

async function deleteRecipe(id) {
  const parsed = await readFile();
  const deletedId = parsed.findIndex((recipe) => recipe.id === id);
  console.log(deletedId);
  if (deletedId === -1) {
    return null;
  }
  const deletedElement = parsed.splice(deletedId, 1);
  await writeFile(parsed);
  return deletedElement;
}

async function changeRecipe(obj) {
  const parsed = await readFile();
  console.log(obj.id);
  const index = parsed.findIndex((recipe) => recipe.id === obj.id);
  console.log(index);
  if (index === -1) {
    return null;
  }
  parsed.splice(index, 1, obj);
  await writeFile(parsed);
  return await readFile();
}

module.exports = { deleteRecipe, changeRecipe };
