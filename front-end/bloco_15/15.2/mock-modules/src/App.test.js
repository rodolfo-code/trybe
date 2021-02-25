import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica que quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: 1234,
    joke: 'whiteboards are remarkable.',
    status: 200
  }

  // const response = { json: jest.fn().mockImplementation(() => Promise.resolve(joke))}
  // const response = { json: jest.fn(() => Promise.resolve(joke))}
  // const response = { json: jest.fn().mockResolvedValue(joke)}
  global.fetch = jest.fn().mockResolvedValue({ 
    json: jest.fn().mockResolvedValue(joke)
  });

  const { findByText } = render(<App />);
  await findByText('whiteboards are remarkable.');

});

