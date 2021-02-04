import React, { Component } from "react";

class Doze2 extends Component {
  render() {
    return (
      <main>
        <h1>Eventos e formulários no React</h1>
        <section>
          <h3>Enunciado do exercício</h3>
          <p>
            Lembra do formulário que você criou na aula do dia 6.1? Vamos criar
            um parecido, e você verá como suas habilidades evoluíram! Crie um
            novo projeto utilizando npx create-react-app my-form-2.0 Caso julgue
            necessário, crie estilos CSS para seu formulário, de acordo com a
            sua imaginação. Não toque no DOM , faça tudo utilizando as
            abstrações do React . Vamos criar um formulário de cadastro de
            currículo com base na especificação seguinte:
          </p>
          <ol>
            <li>
              <p>
              Crie um fieldset para os dados pessoais a seguir:<br/>
              Nome - Texto<br/>
              Limite de 40 caracteres<br/>
              Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.<br/>
              Campo obrigatório<br/>
              Email - Texto<br/>
              Limite de 50 caracteres<br/>
              Campo obrigatório<br/>
              Bônus: Utilize regex para validar o campo email.<br/>
              O formato esperado é: texto@texto.texto .<br/>
              Dica: Para estudar como o regex funciona, utilize o link .<br/>
              CPF - Texto<br/>
              Limite de 11 caracteres<br/>
              Campo obrigatório<br/>
              Endereço - Texto<br/>
              Limite de 200 caracteres<br/>
              Remover qualquer caracter especial que seja digitado<br/>
              Campo obrigatório<br/>
              Cidade - Texto<br/>
              Limite de 28 caracteres
              Ao remover o foco deste campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.<br/>
              Campo obrigatório.<br/>
              Estado - ComboBox<br/>
              Todos os estados do Brasil<br/>
              Campo obrigatório.<br/>
              Tipo - Radio Button<br/>
              Casa, Apartamento<br/>
              Campo obrigatório.
              </p>
            </li>
            <li>
              <p>
              Crie outro fieldset para dados do seu último emprego <br/>
                Resumo do currículo - TextArea<br/>
                Limite de 1000 caracteres<br/>
                Campo obrigatório.<br/>
                Cargo - TextArea<br/>
                Limite de 40 caracteres<br/>
                Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.<br/>
                Campo obrigatório<br/>
                Descrição do cargo - Texto<br/>
                Limite de 500 caracteres<br/>
              Campo obrigatório
              </p>
            </li>
          </ol>
        </section>
      </main>
    );
  }
}

export default Doze2;
