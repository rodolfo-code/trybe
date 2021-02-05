import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email.', () => {
  it('renders learn react link', () => {
    const meuApp = render(<App />);
    const linkElement = meuApp.getByText(/valor/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  it('Verificando se existe campo Email.', () => {
    const { getByTestId } = render(<App />);
    const inputEmail = getByTestId('input-email')
    expect(inputEmail).toBeInTheDocument();
  })
  
  it('Check if there is a two buttons', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2)
  })
  
  it('Checks if there is a send button.', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
     expect(btn).toBeInTheDocument();
     expect(btn.type).toBe('button');
     expect(btn).toHaveValue('Salvar')
  })
  
  it('Verifica de valor do Button é igual a Enviar.', () => {
    const { getByDisplayValue } = render(<App />);
    const buttonValue = getByDisplayValue('Salvar');
  
    expect(buttonValue).toBeInTheDocument();
    expect(buttonValue.value).toBe('Salvar');
  })
 
  it('Verifica que, ao inserir email e clicar em "Enviar", o email aparece na tela', () => {
    // Acessar elementos da sua tela
    const { getByTestId, getByLabelText } = render(<App />)
    const emailInput = getByLabelText('Email')
    const sendButton = getByTestId('id-send')
    const userEmail = getByTestId('id-email-user')

    // Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: 'rod.vgo@gmail.com' } })
    fireEvent.click(sendButton)

    // Fazer o teste
    expect(emailInput.value).toBe('')
    expect(userEmail).toBe('Valor: rod.vgo@gamil.com')
  })

})
