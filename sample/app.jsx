import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import "babel-polyfill";

import ListDemo from './listSample';

require('../style/base.css')

/*const appComponent = (<div>
    <div className={'demo-title'}>React ListDemo</div>
    <ListDemo/>
    </div>);

ReactDOM.render(
    demoRouter, document.getElementById('container')
);*/

const listDemoComponent = React.createClass({

    render() {
        return (<div className={'wrapper'}>
            <div className={'demo-title'}>React ListDemo</div>
            <ListDemo/>
            </div>);
    }
});

const app2 = React.createClass({

    render() {
        return (<div>This app2</div>);
    }
});

const demoRouter = React.createClass({
  render() {
    return (
      <div>
        <h1>CAPH Demo Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/ListDemo">ListDemo</Link></li>
          <li><Link to="/app2">app222222</Link></li>
        </ul>
      </div>
    )
  }
});


ReactDOM.render((
  <Router >
    <Route path="/" component={demoRouter}/>
    <Route path="/ListDemo" component={listDemoComponent}/>
    <Route path="/app2" component={app2}/>
  </Router>
), document.getElementById('container'));

