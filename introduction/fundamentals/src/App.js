// components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';

// styles / css

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentals React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  );
}

export default App;
