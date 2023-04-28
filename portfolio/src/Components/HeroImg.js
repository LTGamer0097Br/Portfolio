//React
import React from 'react';

//CSS
import "./HIstyle.css";

//Imagem
import IntroImg from "../assets/bg.png";

//Funções
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="into-img" src={IntroImg} />
    </div>
    <div className="content">
      <p>SEJA BEM-VIND@!</p>
      <h1>Leonardo Torres</h1>
      <div>
        <Link to="/projetos" className='btn'>Projetos</Link>
        <Link to="/contatos" className='btn btn-light'>Contatos</Link>
      </div>
    </div>
  </div>
}

export default HeroImg