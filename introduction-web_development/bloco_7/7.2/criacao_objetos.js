// notaçao literal
const obj1 = {}
console.log(obj1)

//Object em js
const obj2 = new Object;
console.log(obj2)

// funçao construtora
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Norebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
