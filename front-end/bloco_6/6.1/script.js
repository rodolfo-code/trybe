
let states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
let selectField = document.querySelector('#select-estado');

for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = states[index];
    option.value = states[index]

    selectField.appendChild(option)
};

let botaoEnviar = document.querySelector('#submit')

botaoEnviar.addEventListener('click', function (event) {
    let data = document.querySelector('#data-ini').value;
    
})
