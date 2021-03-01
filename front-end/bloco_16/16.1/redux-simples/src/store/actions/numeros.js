// Action creator
export function alteraNumeroMinimo(novoValor) {
  return {
    type: 'NUM_MIN_ALTERADO',
    payload: novoValor
  }
}

export function alteraNumeroMaximo(novoValor) {
  return {
    type: 'NUM_MAX_ALTERADO',
    payload: novoValor
  }
}