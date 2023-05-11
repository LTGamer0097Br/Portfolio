import React from "react";

import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import Projetos from "./Projetos";
import Sobre from "./Sobre";
import Contatos from "./Contatos";

const Home = () =>{
    return(
        <div>
            <Navbar />
            <HeroImg />
            <div id="projs">
            <Projetos />
            </div>
            <div id="sobre">
            <Sobre />
            </div>
            <div id="contatos">
            <Contatos />
            </div>
            <Footer />
        </div>
    )
}
export default Home;