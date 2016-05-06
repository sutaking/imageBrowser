import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import "babel-polyfill";

import ListDemo from './listSample';
import ButtonDemo from './buttonSample';
import FocusSample from './focus/focus';

import '../style/base.css';

console.log('---------- fzhao app start -----------');

document.addEventListener('DOMContentLoaded',function(){
    console.log('---------- fzhao DOMContentLoaded finish! ---------- ');
    },
false);

window.addEventListener("load", function() {
    console.log("---------- fzhao All resources finished loading! ----------");
}, false);

/*
const appComponent = (<div>
    <div className={'demo-title'}>React ListDemo</div>
    <ListDemo/>
    </div>);

ReactDOM.render(
    appComponent, document.getElementById('container')
);*/


const listDemoComponent = React.createClass({

    render() {
        return (<div className={'wrapper'}>
            <div className={'demo-title'}>React ListDemo</div>
            < ListDemo / >
            </div>);
    }
});

const focusDemo = React.createClass({
    render() {
        return (<div style={{width:'1920px', height: '1080px', background:'black'}}><FocusSample/></div>);
    }
});

const demoRouter = React.createClass({
  render() {
    return (
      <div>
        <h1>CAPH Demo Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/ListDemo">ListDemo</Link></li>
          <li><Link to="/FocusDemo">FocusDemo</Link></li>
          <li><Link to="/ButtonDemo">ButtonDemo</Link></li>
        </ul>
      </div>
    )
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={demoRouter}/>
    <Route path="/ListDemo" component={listDemoComponent}/>
    <Route path="/FocusDemo" component={focusDemo}/>
    <Route path="/ButtonDemo" component={ButtonDemo}/>
  </Router>
), document.getElementById('container'));




