const wordEnding = (word, ending) => word.includes(ending, (word.length - ending.length))

console.log(wordEnding("joaofernando", "nando"))