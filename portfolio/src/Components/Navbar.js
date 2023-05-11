import './NBstyle.css';

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
        <div className={click ? "header active" : "header"}>
            
                <a href="#" className={click ? "nav-title active" : "nav-title"}>
                    <h1>Portfolio</h1>
                </a>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#projs">Projetos</a>
                </li>
                <li>
                  <a href='#sobre'>Sobre Mim</a>
                </li>
                <li>
                  <a href='#contatos'>Contatos</a>
                </li>
            </ul>
            
        </div>
        <div className='hamb' onClick={handleClick}>
                {click ? (
                    <FaTimes size={25} style={{color: '#fff'}}/>
                ) : (
                    <FaBars size={25} style={{color: '#fff'}}/>
                )}
                
            </div>
    </>
  )
}

export default Navbar