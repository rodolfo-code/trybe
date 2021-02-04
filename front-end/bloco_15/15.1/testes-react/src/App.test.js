import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const meuApp = render(<App />);
  const linkElement = meuApp.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verificando se existe campo Email.', () => {
  const { getByTestId } = render(<App />);
  const inputEmail = getByTestId('id-email')

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
})

test('Verificando se existe botão', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2)
})

test('Checks if there is a send button.', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
   expect(btn).toBeInTheDocument();
   expect(btn.type).toBe('button');
   expect(btn).toHaveValue('Enviar')
})

test('Verifica de valor do Button é igual a Enviar.', () => {
  const { getByDisplayValue } = render(<App />);
  const buttonValue = getByDisplayValue('Enviar');

  expect(buttonValue).toBeInTheDocument();
  expect(buttonValue.value).toBe('Enviar');
})
