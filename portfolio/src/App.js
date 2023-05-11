import React from "react";
import './index.css'
import Home from './Routes/Home';
import Contatos from './Routes/Contatos';
import Projetos from './Routes/Projetos';
import Sobre from './Routes/Sobre';
import {Route, Routes} from 'react-router-dom';

function App() {
  const logo = "https://placehold.co/250x250.png";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );    
}

export default App;
