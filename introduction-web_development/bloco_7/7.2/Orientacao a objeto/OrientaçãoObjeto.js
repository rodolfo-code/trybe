// declaração de objeto

const produto = new Object;

produto.nome = 'Moda'
produto.valor = 200
produto['Novo produto'] = 'Carteira'

console.log(produto)

// deletando alementos

delete produto.valor
delete produto[Novo produto]

console.log(produto)

// obsjetos com arrays, outros objetos e funçoes

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereço: {
      logradouro: 'Rua abc',
      numero: 123,
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19,
  }, {
    nome: 'Ana',
    idade: 42
  }],
	calcularValorSeguro: function () {
		//...
}

// acessando e modificando valores

carro.proprietario.endereço.numero = 250

console.log(carro.proprietario.endereço.numero)

carro['proprietario']['endereço']['logradouro'] = 'Rua dos Alfeneiros'
