import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pesquisas from './pages/Pesquisas'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/pesquisas" component={Pesquisas}/>
            {/*
            <Route path="/editais"  component={Editais}/>
            <Route path="/vagas"  component={Vagas}/>
            */}
        </Switch>
    </BrowserRouter>
)

export default Routes;