import './App.css';
import fields from './data';

import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Formulário de cadastro de currículo</h1>
      <Form fields={fields}/>      
    </div>
  );
}

export default App;
