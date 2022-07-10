import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const redTitle = false;
  return (
    <div className="App">
      {/* Css global com index.css */}
      <h1>React with css</h1>
      {/* Css de component */}
      <MyComponent/>
      <p>This paragraher is the App.js</p>
      {/* Css inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        {/* CSS Inline dinâmico*/}
        <h2 style={n < 10 ? ({color: "purple"}): ({color: "pink"})}>Css dinâmico</h2>

        <h2 style={n > 10 ? ({color: "purple"}): ({color: "pink"})}>Css dinâmico</h2>

        <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#000"}): null}>Css dinâmico</h2>
        {/* CLASSE DINAMICA */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinamica</h2>
      </p>
      {/* CSS MODULES */}
      <Title/>
      <h3 className='my-title'></h3>
    </div>
  );
}

export default App;
