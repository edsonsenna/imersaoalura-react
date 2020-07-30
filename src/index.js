import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import VideoForm from './pages/cadastro/Video';
import CategoryForm from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create/category" component={CategoryForm} />
      <Route path="/create/video" component={VideoForm} />
      <Route component={() => (<div>404 Not Found</div>)}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
