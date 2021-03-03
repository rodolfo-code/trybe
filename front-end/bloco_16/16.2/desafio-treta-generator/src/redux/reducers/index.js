// Reducers

const initialState = {
  name: 'funciionou',
  preferencia: 'É bolacha po'  
};

export const tretaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.value
      }
    case 'SELECT_CORRECT':
      return {
        ...state,
        preferencia: action.value
      }

    default:
      return state;
  }
}

