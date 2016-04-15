'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FocusMixin from '../focus/focusMixin';

const CaphListItem = React.createClass({
    mixins: [FocusMixin],

    propTypes: {

        focusable: React.PropTypes.object,

        index: React.PropTypes.number,

        onBoxFocus: React.PropTypes.func,

        listAreaIndex: React.PropTypes.number

    },

    getInitialState: function() {
        return {};
    },

    focus: function(keyCode) {
        this.setState({
            classNames: this.props.className + ' focused'
        });
        
        this.props.scrollList(this.props.index, ReactDOM.findDOMNode(this), keyCode);
        //this.props.onBoxFocus(this.props.listAreaIndex);
    },

    blur: function(keyCode) {
        this.setState({
            classNames: this.props.className
        });
    },
    render: function() {
        const props = this.props;

        //onMouseEnter = { this.focus }
        //onMouseLeave = { this.blur } 
        //style={Object.assign({},props.style, props.background)}

        return <div className = {this.state.classNames}
                focusable = {{ initialFocus: props.focusable}}
                style={props.style}>
                {this.props.index}
            </div>;
    }
});

export default CaphListItem;