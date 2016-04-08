'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import FocusMixin from '../focus/focusMixin';

const CaphListItem = React.createClass({
    mixins: [FocusMixin],
    getInitialState: function() {
        return {};
    },
    /*componentWillMount: function() {
        console.log("componentWillMount - Box, 3");
        //this.setState({ready: true});
    },*/

    focus: function(keyCode) {
        this.setState({
            classNames: this.props.className + ' focused'
        });
        
        //var currentItem = ReactDOM.findDOMNode(this);
        //console.log(currentItem.getBoundingClientRect().right);
        
        this.props.scrollList(this.props.index, ReactDOM.findDOMNode(this), keyCode);
        this.props.onBoxFocus(this.props.listAreaIndex);
    },
    blur: function(keyCode) {
        this.setState({
            classNames: this.props.className
        });
    },
    render: function() {

        return <div className = {this.state.classNames }
        focusable = {{ initialFocus: this.props.focusable}}
        //onMouseEnter = { this.focus }
        //onMouseLeave = { this.blur } 
        style={this.props.style} >
        {this.props.index}
        </div>;
    }
});

export default CaphListItem;