import React from 'react';
import ReactDOM from 'react-dom';

var itemWidth, limit;

const caphList = React.createClass({

    propTypes: {

        direction: React.PropTypes.string,

        onBoxFocus: React.PropTypes.func,

        containerStyle: React.PropTypes.object

    },

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

            itemWidth = item.getBoundingClientRect().left-listAreaOffset;//del 30 val
            limit = Math.floor((listAreaWidth-listAreaOffset)/item.offsetWidth);
        };

        function getScrollIndex (_index) {
            return _index+1-limit;
        };

        function keyCodeTop () {

        };

        function keyCodeBottom () {

        };

        function keyCodeLeft () {
            if(item.getBoundingClientRect().right > itemWidth) {
                return;
            }
            //return -item.offsetLeft;
            return -index*itemWidth;
        };

        function keyCodeRight () {
            if((item.getBoundingClientRect().left+itemWidth) < listAreaWidth) {
                return;
            }
            /*if((item.offsetLeft+item.offsetWidth+listAreaOffset) <= listAreaWidth) {
                return 0;
            }*/
            else {
                //console.log('3333');
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
    componentWillMount: function() {
        //console.log(ReactDOM.findDOMNode(this));
        //componments.push(this);
        //this.setState({ready: true});
    },
    
    _handleScrollState(pos) {
        //if(!pos){return}
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
        const props = this.props;

        const listChildren = React.Children.map(this.props.children, (currentChild)=>{

            //console.log(currentChild);
            var positionStyle = {
                width:265,
                height: 265,
                position: 'absolute',
                transform: 'translate3d('+ (currentChild.props.index*270) +'px,0,0)',
            }
            
            return React.cloneElement(currentChild, 
                {scrollList: this.moveList, 
                    style:Object.assign({}, currentChild.props.background, positionStyle) });
        });

        //console.log(this.props.containerStyle);

        return (<div
            style={Object.assign({}, this.state.moveListStyle, props.containerStyle)}>
            {listChildren}
            </div>
        );
    }
});

export default caphList;