
import "./PCstyle.css"
import ProjArray from "./ProjArray";
import ProjCards from "./ProjCards";
import Carousel from "./Carousel";

import Anjo from "../assets/Anjo.png"
import BG from "../assets/bg.png"
import Pantheon from "../assets/Pantheon.png"
import Portfolio from "../assets/Portfolio.png"
import Rascunho from "../assets/Rascunho.png"
import Jhin from "../assets/Jhin.png"



import React from 'react';

const Projs = () => {
  return (
    <div className="projs-container">
      <h1 className='project-heading'>JOGOS:</h1>
      <div className="project-container">
        {ProjArray.map((val,ind) =>{
          return(
            <ProjCards 
              key={ind}
              img={val.img}
              title={val.title}
              text={val.text}
              link={val.link}
            />
          )
        })}
      </div>

      
      <h1 className='project-heading'>DESENHOS:</h1>
      <Carousel>
        <img src={Anjo} alt="placeholder" />
        <img src={BG} alt="placeholder" />
        <img src={Pantheon} alt="placeholder" />
        <img src={Portfolio} alt="placeholder" />
        <img src={Rascunho} alt="placeholder" />
        <img src={Jhin} alt="placeholder" />

      </Carousel>
    </div>
  );
};

export default Projs;