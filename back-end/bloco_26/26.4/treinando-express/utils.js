const fs = require('fs/promises');

async function getPost(id) {
  const response = await fs.readFile('./post.json', 'utf-8');
  const parsed = JSON.parse(response);
  if (id) {
    const idExists = parsed.find((post) => post.id === parseInt(id));
    if (idExists) {
      return idExists;
    } else {
      return undefined;
    }
  }
  return parsed;
}

// getPost(2).then((data) => console.log(data));

module.exports = getPost;
