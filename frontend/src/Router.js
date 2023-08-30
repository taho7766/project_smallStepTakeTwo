import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListProjects from './views/ListProjects';
import AddProject from './views/AddProject';
import EditProject from './views/EditProject';
import ViewProject from './views/ViewProject';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' Component={ListProjects} />
            <Route path='/add' Component={AddProject} />
            <Route path='/edit/id:' Component={EditProject} />
            <Route path='/view/id:' Component={ViewProject} />
        </Switch>
    </BrowserRouter>
);

export default Router;