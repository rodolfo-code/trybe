const square = (n) => {
  let symbol = '*';
  let container = ''

  for(let index = 0; index < n; index += 1){
    for(let j = 0; j < n; j += 1) {
      container += symbol
    }  
  console.log(container)
  }
}

square(5)