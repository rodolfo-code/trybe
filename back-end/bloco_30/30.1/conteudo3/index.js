const {default: axios} = require('axios')

const CIDADES = {
  sao_vicente: {
    cep: '11.365-180'
  },
  itaberaba: {
    cep: '46.880-000'
  }
}

async function consultaCEP(cidade) {
  const { cep } = CIDADES[`${cidade}`]

  const valida = validaCEP(cep)
  
  let cepTratado;
  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, "");
    const URL = `https://brasilapi.com.br/api/cep/v1/${cepTratado}`

    const request = await axios.get(URL)
    console.log(request.data)
  } else {
    console.log('digita o dep certo seu desatento')
  }
}

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
  return regexCEP.test(cep)
}

consultaCEP('itaberaba')