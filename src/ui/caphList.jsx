import React from 'react';
import ReactDOM from 'react-dom';

import Box from './caphBox';
import Title from '../../sample/title.jsx';

var listArea = React.createClass({

    getInitialState() {
        return {};
    },

    setItems() {
        var items = [];
        var currentIndex = this.props.index;

        var setInit = function(index) {
            var val = false;
            if (index === 0 && currentIndex === 0){val = true;}
            return {initialFocus: val};
        };

        var getUrl = function (index) {
            return {
                background: 'url('+require('../../sample/img/'+index%15+'.jpg')+') 100% 100% no-repeat', 
                backgroundSize:'100% 100%'
            }
        };

        for(var i=0; i<this.props.num; ++i) {
            items.push(< Box 
                focusable = {setInit(i)}
                className = "location1" 
                style={getUrl(i+4*this.props.index)}
                index={i}
                onBoxFocus={this.props.onBoxFocus}
                listAreaIndex={this.props.index}
                scrollList={this.moveList}/>);
        }
        return items;
    },

    moveList(index) {
        var distance = -parseInt(index-2)*479;
        var moveListStyle = {
            transform: 'translate3d('+ distance+'px,0,0)',
            transition: '.5s transform ease-out',
        };
        this.setState({
            moveListStyle: moveListStyle 
        });
    },

    render() {
        var calcWidth = function(index) {
            return {width: index*479};
        };

        return (<div>
            <div className="list-area" 
            style={Object.assign({}, this.state.moveListStyle, calcWidth(this.props.num))} >                     
            {this.setItems()}
            </div>
            </div>
        );
    }
});

module.exports = listArea;