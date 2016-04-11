import React from 'react';
import ReactDOM from 'react-dom';

import ListDemo from './listSample';

require('../style/base.css')

const appComponent = (<div>
    <div className={'demo-title'}>React ListDemo</div>
    <ListDemo/>
    </div>);

ReactDOM.render(
    appComponent, document.getElementById('container')
);
