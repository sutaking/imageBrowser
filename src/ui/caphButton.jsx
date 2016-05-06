'use strict';

import React from 'react';

const caphButton = React.createClass({

    propTypes: {
        size: React.PropTypes.string
    },

    render() {
        var Component = this.props.component || 'button';

        const mergeStyles = Object.assign({}, {
            height: 80,
            width: 200,
            fontSize: 60,
            lineHeight: '80px',
            textAlign: 'center',
            //background: 'red',
        }, this.props.style);

        return (
            <Component style={mergeStyles}>
                {this.props.children}
            </Component>
        );
    }
});

export default caphButton;