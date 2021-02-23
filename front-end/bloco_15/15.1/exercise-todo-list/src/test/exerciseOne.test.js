import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import InputTodo from '../InputTodo';
import App from '../App';


describe('2 - Testando funcionalidades do botão', () => {
  test('Testando se há botão de adicionar tarefa', () => {
    const { getByText } = render(<App />);
    const button = getByText('Adicionar');
    
    expect(button.type).toBe('button');
    expect(button).toBeInTheDocument();
  })

  test('Verifica se ao ser clicado o botão salva a tarefa', () => {
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText('Tarefa:')
    const button = queryByText('Adicionar');

    fireEvent.change(input, { target: { value: 'Almoçar' } })
    expect(queryByText('Almoçar')).not.toBeInTheDocument()

    fireEvent.click(button)
    expect(queryByText('Almoçar')).toBeInTheDocument();
  })
  
})
