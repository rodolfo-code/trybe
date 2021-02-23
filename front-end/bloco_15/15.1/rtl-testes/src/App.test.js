import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção de email', () =>{
  it('Verifica que há campo input de email na tela', () => {
    // Acessar elementos da sua tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
  
    // Fazer seu teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email')
  });
  
  it('Verifica se há botões', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button')
  
    // Fazer os testes
    expect(button.length).toBe(2)
  })
  
  it('Verifica se há botão com id específico', () => {
    const { getByTestId } = render(<App/>);
    const button = getByTestId('id-send')
  
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Salvar')
  })

  it('Verifica que ao inserir email e clicar Enviar o email aparece na tela', () => {
    // Acessar elemento
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
    // Interagir
    fireEvent.change(emailInput, { target: { value: 'rod.vgo@gmail.com' } });
    fireEvent.click(sendButton);
    // Fazer o teste
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: rod.vgo@gmail.com');
  })
})

