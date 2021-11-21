import React from "react";
import { Link } from "react-router-dom";
import recifeImagem from './imagem/rec.jpg'

export const Cidade =()=> (<div className="main">
        <img className="imagem" src={recifeImagem} alt="Recife" />
        <h2>Minha cidade preferida é o meu Recife.</h2>
        <p>
        Recife, a capital do estado de Pernambuco, no nordeste do Brasil, distingue-se pelos seus vários rios, pontes, ilhéus e penínsulas.
            </p>


         <Link to="/home" className="nav-link">Home</Link>     
    </div>)
