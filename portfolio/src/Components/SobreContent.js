import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import './SCstyle.css'

import React from 'react'

const SobreContent = () => {
  const { ref, inView } = useInView({
    rootMargin: '100px',
    threshold: 0.5,
  });
  return (
    <div className='sobre' ref={ref}>
      <div className='left'>
        <h1>Quem sou eu?</h1>
        <p className={inView ? 'visible' : ''}>Eu sou Leonardo Torres, um estudante da ETEC de 17 anos que deseja ser um programador de jogos. Eu estudo programação desde os 12 anos, buscando desenvolver jogos usando linguagem Drag & Drop. Em 2021, entrei na Escola Técnica de Cotia, a ETEC, onde aprendi a fundo liguangens como HTML, PHP, CSS, Python, C# e muito mais. Eu também estou estudando GML, Game Maker Language, que é uma linguagem própria do Game Maker Studio 2.</p>
        <a href='#contatos'>
            <button className='btn'>Entre em contato!</button>
        </a>
      </div>
      <div className='right'>
        <div className='img-container' >
          <div className='img-stack'>
            <img className={inView ? 'img visible' : 'img'} src='https://i.imgur.com/j5PsMkp.jpg' alt='Minha foto'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreContent