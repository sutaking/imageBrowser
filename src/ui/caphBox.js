'use strict';
import React from 'react';
import FocusMixin from '../focus/focusMixin';

var Box = React.createClass({
    mixins: [FocusMixin],
    /*getInitialState: function() {
        console.log('Box - getInitialState');
        return { newStateKey: 'box' };
    },
    componentWillMount: function() {
        console.log("componentWillMount - Box, 3");
        //this.setState({ready: true});
    },*/

    focus: function(e) {
        //console.log(e);
        this.setState({
            classNames: this.props.className + ' focused'
        });
        
        if((e === 37 && this.props.index>1) || (e === 39 && this.props.index>2)) {
            this.props.scrollList(this.props.index);
        }
        else {
            this.props.onBoxFocus(this.props.listAreaIndex);
        }
        
    },
    blur: function(e) {
        //console.log(e);
        this.setState({
            classNames: this.props.className
        });
    },
    render: function() {

        return <div className = { 'box ' + this.state.classNames }
        focusable = {{ initialFocus: true }}
        //onMouseEnter = { this.focus }
        //onMouseLeave = { this.blur } 
        style={this.props.style} >
        {this.props.index}
        < /div>;
    }
});

module.exports = Box;