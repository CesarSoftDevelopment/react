import logo from './logo.svg';
import './App.css';
import Js from './assets/java.png';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      {/* Image in public */}
      <div>
        <img src="js.jpg" alt="Javascript" />
      </div>
      {/* CLOSE: Image in public */}

     {/* Image in assets */}
      <div>
        <img src={Js} alt="Javascript é vida" />
      </div>

    </div>
  );
}

export default App;
