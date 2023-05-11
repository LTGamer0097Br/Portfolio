import { NavLink } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import './PCstyle.css'

import React from 'react'


const ProjCards = (props) => {
  const { ref, inView } = useInView({
    rootMargin: '20px',
    threshold: 0.1,
  });
  
  return (
    <div className='Pcards'>

      
      <div ref={ref} className='project-container'>
        <div className={inView ? "card-group visible" : "card-group"}>
          <NavLink to={props.link} target={'_blank'}>
            <div className="project-card">
              <img src={props.img} alt="imagem"/>
              <h2 className='project-title'>{props.title}</h2>
              <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btn-group'>
                  <div href={props.link} target={'_blank'} className="btn">
                    Clique aqui para ver
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    
  )
}

export default ProjCards