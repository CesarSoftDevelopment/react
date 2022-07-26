
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

// components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {/* dinamic router */}
          <Route path='/products/:id' element={<Product/>}/>
          {/* nested route */}
          <Route path='/products/:id/info' element={<Info/>}/>
          {/* 7 no match route */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
