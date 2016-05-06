import React from 'react';

import CaphButton from '../src/ui/caphButton';

const getStyles = () => {
    return {
        position: 'absolute',
        top: 30,
        left: 10,
        float: 'left'
    };
}

var ButtonDemo = React.createClass({

    getInitialState() {
        return {};
    },

    render() {
        return (
            <div style={getStyles()}>
                <CaphButton>Button</CaphButton>
            </div>
        );
    }

});

module.exports = ButtonDemo;