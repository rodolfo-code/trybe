import { render, screen } from '@testing-library/react';
import App from './App';

test('1 - Verifica que há campo input de email na tela', () => {
  // Acessar elementos da sua tela
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');

  // Fazer seu teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
});

test('2 - Verifica se há botões', () => {
  const { getAllByRole } = render(<App />);
  const button = getAllByRole('button')

  // Fazer os testes
  expect(button.length).toBe(2)
})
