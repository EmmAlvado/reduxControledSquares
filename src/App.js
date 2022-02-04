
import './App.css';
import BorderController from './component/hoc/borderController';
import SetBorder from './component/redux/SetBorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Controled by HOC:</h2>
        <BorderController />
        <h2>Controled by store:</h2>
        <SetBorder />
      </header>
    </div>
  );
}

export default App;
