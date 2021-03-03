// Reducers

const initialState = {
  name: 'funciionou',
  
};

console.log(initialState.name)

export const tretaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.value
      }

    default:
      return state;
  }
}

