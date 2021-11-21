import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { Musica } from './Musica';
import { Cidade } from '/Cidades'

export const App = () => (<BrowserRouter>



    <div className="App">

    <Switch>
        <Route path="/" exact component={Home}/>
       <Route path="/home" component={Home}/>
        <Route path="/cidade" component={Cidade}/>
         <Route path="/musica" component={Musica}/>
      </Switch>
</div>

  </BrowserRouter>

  );


