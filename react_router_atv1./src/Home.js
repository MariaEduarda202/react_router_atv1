import React from 'react'
import {Link} from 'react-router-dom'
import {Text} from './Texto'
export const Home=()=>(<div className="main">
     <Text texto=""/>
        <nav className="nav">
       <Link to="/cidade" className="nav-link">Cidade Preferida</Link>
       <Link to="/musica" className="nav-link"  >Musica Peferida</Link>
        </nav>
    </div>);
