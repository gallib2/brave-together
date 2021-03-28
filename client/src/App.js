import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Template from './template/template';
import Text from './text/text';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Template} />
        <Route exact path='/text' component={Text} />
        <Route path='*' component={() => '404 Not Found'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
