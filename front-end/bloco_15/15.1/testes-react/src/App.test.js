import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const meuApp = render(<App />);
  const linkElement = meuApp.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verificando se existe campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email')

  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
})
