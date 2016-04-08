import React from 'react';
import ReactDOM from 'react-dom';

import ListDemo from './listSample.jsx';

require('../style/base.css')

const appComponent = (< div >
    <div className={'demo-title'}>React CAPH Showcase</div>
    <ListDemo/>
    </div>);

ReactDOM.render(
    appComponent, document.getElementById('container')
);
