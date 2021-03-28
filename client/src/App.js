import React from 'react';
import './App.css';
import './app.scss';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Template from './template/template';
import StoryCheck from './storyCheck/storyCheck';
import Testimony from './testimony/testimony';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Template} />
        <Route exact path='/storyCheck' component={StoryCheck} />
        <Route exact path='/testimony' component={Testimony} />
        {/* <Route exact path='/textEdit' component={TextEdit} /> */}
        <Route path='*' component={() => '404 Not Found'} />
      </Switch>
      <div className='menu'>
        <div className='menu-icon'>O</div>
        <div className='menu-icon'>P</div>
        <div className='menu-icon'>K</div>
        <div className='menu-icon'>J</div>
      </div>
    </BrowserRouter>
  )
}

export default App;
