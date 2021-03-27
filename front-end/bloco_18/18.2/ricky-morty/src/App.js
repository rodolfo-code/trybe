import Routes from './routes/Routes';
import './global.css';

import CharacterProvider from './contextApi/CharacterProvider';

function App() {
  return (
    <CharacterProvider>
      <Routes />
    </CharacterProvider>
  );
}

export default App;
