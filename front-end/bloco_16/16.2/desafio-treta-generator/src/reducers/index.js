// Reducers

export const addNome = (value) => ({
  type: 'ADD_NAME',
  value,
});

export const selectCorrect = (value) => ({
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