
const inicial = {
  min: 0,
  max: 0
}

function numerosReducer(state = inicial, action) {
  switch (action.type) {
    case 'NUM_MIN_ALTERADO':
      return {
        ...state,
        min: action.payload
      }
    case 'NUM_MAX_ALTERADO':
      return {
        ...state,
        max: action.payload
      }
  
    default:
      return state
  }
}

export default numerosReducer;