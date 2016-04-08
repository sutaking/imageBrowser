import React from 'react';
import ReactDOM from 'react-dom';

var itemWidth, limit;

const caphList = React.createClass({

    getInitialState() {
        return {};
    },

    moveList(index, item, keyCode) {
        const listAreaWidth = 1920;
        var currentList = ReactDOM.findDOMNode(this);
        const listAreaOffset = currentList.getBoundingClientRect().left;

        //console.log(this.props.direction);
        const keyMap = {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40
        }

        if(index === 1) {
            itemWidth = item.offsetLeft;
            limit = Math.floor((listAreaWidth-listAreaOffset)/item.offsetWidth);
        };

        function getScrollIndex (index) {
            return index+1-limit;
        };

        function keyCodeTop () {

        };

        function keyCodeBottom () {

        };

        function keyCodeLeft () {
            if(item.getBoundingClientRect().right > itemWidth) {
                return;
            }
            return -item.offsetLeft;
        };

        function keyCodeRight () {
            if((item.getBoundingClientRect().left+itemWidth) < listAreaWidth) {
                return;
            }
            if((item.offsetLeft+item.offsetWidth+listAreaOffset) <= listAreaWidth) {
                return 0;
            }
            else {
                return getScrollIndex(index)* -itemWidth;
            }

        };

        var distance;
        if (this.props.direction === 'vertical') {
        }
        else {
            switch(keyCode) {
                case keyMap.LEFT:
                    distance = keyCodeLeft();
                    break;
                case keyMap.RIGHT:
                    distance = keyCodeRight();
                    break;
                case keyMap.UP:
                case keyMap.DOWN:
                    return;
            }
        }
        this._handleScrollState(distance);
        
    },

    _handleScrollState(pos) {
        //console.log('_handleScrollState:'+pos);
        var moveListStyle = {
            transform: 'translate3d('+ pos +'px,0,0)',
            transition: '.5s transform ease-out',
        };
        this.setState({
            moveListStyle: moveListStyle 
        });
    },

    render() {

        const listChildren = React.Children.map(this.props.children, (currentChild)=>{
            
            return React.cloneElement(currentChild, { scrollList: this.moveList });
        });

        return (<div
            style={Object.assign({}, this.state.moveListStyle, this.props.containerStyle)}>
            {listChildren}
            </div>
        );
    }
});

export default caphList;