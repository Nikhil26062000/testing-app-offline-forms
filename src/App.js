import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Form2 from './Form2';
import Home from './Home';

function App() {
  return (
   <>
    
    <Router>
      <Routes>
      <Route path="/testing-app-offline-forms/" element={<Home/>}/>

        <Route path="/testing-app-offline-forms/#/form" element={<Form/>}/>
        <Route path="/testing-app-offline-forms/#/form2" element={<Form2/>}/>

      </Routes>
    </Router>
   </>
  );
}

export default App;
