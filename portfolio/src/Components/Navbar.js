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
            
                <Link to="/" className={click ? "nav-title active" : "nav-title"}>
                    <h1>Portfolio</h1>
                </Link>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre Mim</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
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