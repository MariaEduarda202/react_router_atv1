import React from "react";
import { Link } from "react-router-dom";
import praiaImage from './imagem/index.jpg'

export const Musica =()=>{
    return (<div className="main">
  <h1>Conheça a minha música preferida que menciona a minha cidade</h1>
         <h3>La belle de jour</h3>
        <p>Para ouvir a música, <a href='https://www.youtube.com/watch?v=UxvTdW9CLfI' target="blank" >clique aqui</a>.</p>

        <img className="imagem" src={praiaImage} alt="Recife" />
         <Link to="" className="">Cidade</Link>     
    </div>)
}