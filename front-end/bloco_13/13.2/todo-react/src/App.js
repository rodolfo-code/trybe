import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import './App.css';
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="todo-app">
      <TodoForm />
    </div>
  );
}

export default App;
