import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica que há campo input de email na tela', () => {
  // Acessar elementos da sua tela
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');

  // Fazer seu teste
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
  

  // Interagir com eles (se houver necessidade)


});
