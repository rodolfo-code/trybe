import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    const { listTodo, selectedTodo } = this.state;
    this.setState({listTodo: listTodo.filter(task => task !== selectedTodo)})
    this.setState({selectedTodo: null,})
  }

  selectTodo(selectedTodo) {
    this.setState({
      selectedTodo,
    })
  }

  render() {
    const { listTodo, selectedTodo } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          stateBtn={!selectedTodo && true}
          removeTodo={this.removeTodo}
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} selectTodo={todo => this.selectTodo(todo)}/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
