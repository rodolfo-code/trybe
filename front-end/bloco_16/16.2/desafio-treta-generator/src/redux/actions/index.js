// Actions

export const ADD_NAME = 'ADD_NAME'
export const SELECT_PREFERENCE = 'SELECT_PREFERENCE'
export const FOOD_SELECT = 'FOOD_SELECT'
export const ANIMAL_SELECT = 'ANIMAL_SELECT'



export const addName = (value) => ({
  type: ADD_NAME,
  value,
});

export const preference = (value) => ({
  b: console.log(value),
  type: SELECT_PREFERENCE,
  value,
});

export const foodSelect = (value) => ({
  type: FOOD_SELECT,
  value
});

export const animalSelect = (value) => ({
  type: ANIMAL_SELECT,
  value
});