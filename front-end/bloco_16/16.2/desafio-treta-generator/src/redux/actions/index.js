// Actions


export const addName = (value) => ({
  type: 'ADD_NAME',
  value,
});

export const preference = (value) => ({
  b: console.log(value),
  type: 'SELECT_CORRECT',
  value,
});

export const foodSelect = (value) => ({
  type: 'FOOD_SELECT',
  value
});

export const animalSelect = (value) => ({
  type: 'ANIMAL_SELECT',
  value
});