'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

var FocusConstant = {

    DIRECTION: {
        LEFT: 'left',
        RIGHT: 'right',
        UP: 'up',
        DOWN: 'down'
    },

    DEFAULT: {
        DEPTH: 0,
        GROUP: 'default',
        KEY_MAP: {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            ENTER: 13
        },

        DISTANCE_CALCULATION_STRATEGY: 'default'
    }
};

var componments = [];

var currentFocusComponment = null;

var currentKeyMap = FocusConstant.DEFAULT.KEY_MAP;

function getPosition(target) {
    var element = jQuery(target);
    element = jQuery(target);
    var offset = element.offset();

    return {
        left: offset.left,
        top: offset.top,
        width: element.width(),
        height: element.height()
    };
}

function getNextFocusItem(direction) {
    var currentFocusElement = ReactDOM.findDOMNode(currentFocusComponment); //currentFocusComponment.getDOMNode();
    currentFocusElement = ReactDOM.findDOMNode(currentFocusComponment);
    var currentFocusElementPosition = getPosition(currentFocusElement);
    var nearest;
    var position;
    var distance = 0;
    var hDistance = null;
    var vDistance = null;
    componments.map(function(componment) {
        position = getPosition(ReactDOM.findDOMNode(componment));
        switch (direction) {
            case FocusConstant.DIRECTION.LEFT:
            case FocusConstant.DIRECTION.RIGHT:
                if(currentFocusElementPosition.top === position.top) {
                    if(direction === FocusConstant.DIRECTION.RIGHT){
                        distance = position.left - currentFocusElementPosition.left;
                    } else {
                        distance = currentFocusElementPosition.left - position.left;
                    }
                    if(distance > 0 && (hDistance === null || distance < hDistance)) {
                        hDistance = distance;
                        nearest = componment;
                    }
                }
                break;
            case FocusConstant.DIRECTION.UP:
            case FocusConstant.DIRECTION.DOWN:
                if(Math.abs(currentFocusElementPosition.left - position.left) < 10) {
                    if(direction === FocusConstant.DIRECTION.UP){
                        distance = currentFocusElementPosition.top - position.top;
                    } else {
                        distance = position.top - currentFocusElementPosition.top;
                    }
                    if(distance > 0 && (hDistance === null || distance < hDistance)) {
                        hDistance = distance;
                        nearest = componment;
                    }
                }
                break;
            case currentKeyMap.ENTER:
                //TODO
                break;
        }
    }, this);
    return nearest;
}

var FocusMixin = {
    getDefaultProps: function() {
        return { name: "Tom" };
    },
    getInitialState: function() {
        return {
            classNames: this.props.className + (this.props.focusable.initialFocus ? ' focused' : ''),
            focusable: {
                name: 'focusableName',
                initialFocus: this.props.focusable.initialFocus,
                focused: false,
                prev: null
            }
        };
    },
    componentWillMount: function() {
        componments.push(this);
        //this.setState({ready: true});
    },
    componentDidMount: function() {
        currentFocusComponment = this.props.focusable.initialFocus ? this : currentFocusComponment;
        //$(ReactDOM.findDOMNode(this)).append("surprise!");
        document.onkeydown = function(event) {
            var keyCode = event.keyCode || event.which || event.charCode;
            if (!(keyCode > 36 && keyCode < 41)) {
                return;
            }
            var nextFocusItem;
            switch (keyCode) {
                case currentKeyMap.LEFT:
                    nextFocusItem = getNextFocusItem(FocusConstant.DIRECTION.LEFT);
                    break;
                case currentKeyMap.RIGHT:
                    nextFocusItem = getNextFocusItem(FocusConstant.DIRECTION.RIGHT);
                    break;
                case currentKeyMap.UP:
                    nextFocusItem = getNextFocusItem(FocusConstant.DIRECTION.UP);
                    break;
                case currentKeyMap.DOWN:
                    nextFocusItem = getNextFocusItem(FocusConstant.DIRECTION.DOWN);
                    break;
                case currentKeyMap.ENTER:
                    //TODO
                    break;
            }
            if(nextFocusItem){
                currentFocusComponment.blur(keyCode);
                nextFocusItem.focus(keyCode);
                currentFocusComponment = nextFocusItem;
            }
        }
    },

    componentWillReceiveProps: function(newProps) {
        
    },
    shouldComponentUpdate: function() {
        return true;
    },
    componentWillUpdate: function() {
        
    },

    componentDidUpdate: function() {
        
    },

    handleKeyPress: function(key) {
        var that = this
        var newState = {}
        return function(event) {
            newState[key] = event.target.value;
            that.setState(newState);
        }
    }
};

module.exports = FocusMixin;