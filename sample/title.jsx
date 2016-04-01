import React from 'react';

//
var Title = React.createClass({
    render() {
        return (
            <div className={this.props.styleClass}>{this.props.str}</div>
        );
    }
});

module.exports = Title;