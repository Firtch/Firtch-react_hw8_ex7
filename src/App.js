import logo from './logo.svg';
import './App.css';
import Radar from "./Radar.js"

function App() {
  const max = 60;
  return (
    <div className="App">
      <h1>Максимальная скорость: {max}</h1>
     <Radar maxSpeed={max} />
    </div>
  );
}

export default App;
