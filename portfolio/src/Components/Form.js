import "./FCstyle.css"
import React from 'react'
import { FaMailBulk, FaLinkedin, FaTwitch, FaGithub, FaTwitter} from "react-icons/fa";
const Form = () => {
  return (
    <div className="form">
      <h1>Me escreva um texto</h1>
      <form>
        <label>Seu Nome:</label>
        <input type="text"></input>
        <label>Seu email:</label>
        <input type="email"></input>
        <label>Título:</label>
        <input type="text"></input>
        <label>Mensagem:</label>
        <textarea rows="6" placeholder="Escreva sua mensagem aqui" type="text"></textarea>
        <button className="btn">Enviar</button>
      </form>
      <h1>Ou me contate pelas redes sociais:</h1>
      <div className="socialContact">
        <a href='https://www.linkedin.com/in/leonardo-torres-74aab6245/' target={'_blank'}><FaLinkedin size={45} style={{color:"#ac8bf4"}}/></a>
        <a href='https://www.twitch.tv/gamer0097br_' target={'_blank'}><FaTwitch size={45} style={{color:"#ac8bf4"}}/></a>
        <a href='https://github.com/LTGamer0097Br' target={'_blank'}><FaGithub size={45} style={{color:"#ac8bf4"}}/></a>
        <a href='https://twitter.com/gamer0097br_' target={'_blank'}><FaTwitter size={45} style={{color:"#ac8bf4"}}/></a>
        <a href="mailto:leort0097br@gmail.com"><FaMailBulk size={45} style={{color:"#ac8bf4"}}/></a>
      </div>
    </div>
  )
}

export default Form