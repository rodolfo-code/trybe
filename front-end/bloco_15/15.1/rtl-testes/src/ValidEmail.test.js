import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testando input caso email seja válido ou inválido', () => {
  it('Testando um componente, caso o email seha válido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  });

  it('Teste de caso email inválido', () => {
    const { getByText } = render(<ValidEmail email={''} />);
    const isInvalid = getByText('Email Inválido')

    expect(isInvalid).toBeInTheDocument();
  })
})