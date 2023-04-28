import './Fstyle.css';

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitch, FaGithub, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{color:"white", marginRight: '2rem'}}/>
       
                <p>Cotia, São Paulo</p>
                <p>Brasil</p>
          
          </div>
          <div className='phone'>
            <h4>
                <FaPhone size={20} style={{color:"white", marginRight: '2rem', marginTop: "1rem"}}/>
                +55 (11) 9 5325-9340
            </h4>
            <p><i>(Número Público)</i></p>
           
          </div>
          <div className='email'>
            <h4>
                <FaMailBulk size={20} style={{color:"white", marginRight: '2rem', marginTop: "1rem"}}/>
                leort0097br@gmail.com
            </h4>
          </div>
        </div>

        <div className='right'>
            <h4>Sobre mim</h4>
            <p>Eu sou Leonardo, estudante, programador e estudante.</p>
            <div className='social'>
                <a href='https://www.linkedin.com/in/leonardo-torres-74aab6245/' target={'_blank'}><FaLinkedin size={25} style={{color:"white", marginRight: '2rem'}}/></a>
                <a href='https://www.twitch.tv/gamer0097br_' target={'_blank'}><FaTwitch size={25} style={{color:"white", marginRight: '2rem'}}/></a>
                <a href='https://github.com/LTGamer0097-Br' target={'_blank'}><FaGithub size={25} style={{color:"white", marginRight: '2rem'}}/></a>
                <a href='https://twitter.com/gamer0097br_' target={'_blank'}><FaTwitter size={25} style={{color:"white", marginRight: '2rem'}}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer