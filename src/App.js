import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Form2 from './Form2';
import Home from './Home';

function App() {
  return (
   <>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>

        <Route path="/form" element={<Form/>}/>
        <Route path="/form2" element={<Form2/>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
