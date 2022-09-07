import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Maquillage from './components/Maquillage';
import NewArticle from './components/NewArticle';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  
  return (
    <div className="container">
    <Router>
    <Navbar/>
    <main>
      
      <Routes>
      <Route exact path='/'  element={<Home/>} />
      <Route exact path='/maquillage' element={<Maquillage/>} />
      <Route exact path='/new-articles' element={<NewArticle/>} />
      <Route exact path='/cart'  element={<Cart/>} />
      </Routes>
    </main> 
   </Router>
   </div>
  );
}

export default App;
