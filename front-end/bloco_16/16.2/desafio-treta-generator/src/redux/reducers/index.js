// Reducers

import { ADD_NAME, SELECT_PREFERENCE, FOOD_SELECT, ANIMAL_SELECT } from '../actions'

const initialState = {
  name: '',
  preference: '',
  food: '',
  animal: ''
};

export const tretaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.value
      }
    case SELECT_PREFERENCE:
      return {
        ...state,
        preference: action.value
      }
    case FOOD_SELECT:
      return {
        ...state,
        food: action.value
      }
    case ANIMAL_SELECT:
      return {
        ...state,
        animal: action.value
      }

    default:
      return state;
  }
}

