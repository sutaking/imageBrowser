import React from 'react';
import ReactDOM from 'react-dom';

var itemWidth, limit;

const caphList = React.createClass({

    propTypes: {

        /**
         * Direction of layout for columns.
         */
        direction: React.PropTypes.string,

        /**
         * Override the inline-styles of the root element.
         */
        style: React.PropTypes.object,

        /**
         * Number of px for one cell height.
         */
        itemHeigh: React.PropTypes.number,

        /**
         * Ratio of cell height.
         */
        aspectRatio: React.PropTypes.number,

        /**
         * Number of px for the padding/spacing between items.
         */
        padding: React.PropTypes.number,

        /**
         * Number of columns.
         */
        cols: React.PropTypes.number,

        /**
         * event func for focus.
         */
        //onBoxFocus: React.PropTypes.func

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
            itemWidth = item.getBoundingClientRect().left-listAreaOffset;
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

    getItemWidth(height, ratio) {

        switch(ratio) {
            case 0:
                return height;
            case 1:
                return height/3*4;
            case 2:
                return height/4*3;
            case 3:
                return height/9*16;
            case 4:
                return height/16*9;
            default:
                return height;
        }
    },

    getPositionItem(index, width) {
        const props = this.props;
        const itemViewWidth = width + props.padding;
        const itemViewHeight = props.itemHeigh + props.padding;

        var getTopIndex = function(_index) {
            if(props.direction === 'V' || props.direction === 'v') {
                return Math.floor(_index/props.cols);
            }
            //console.log(_index+' top:'+_index%props.cols);
            return _index%props.cols;
        };

        var getLeftIndex = function(_index) {
            //console.log(_index+' left:'+Math.floor(_index/props.cols));
            if(props.direction === 'V' || props.direction === 'v') {
                return _index%props.cols;
            }
            return Math.floor(_index/props.cols);
        };

        var itemTop = getTopIndex(index)*itemViewHeight;
        var itemLeft = getLeftIndex(index)*itemViewWidth;

        //console.log('index:'+index+', itemTop:'+itemTop+', itemLeft:'+itemLeft);
        return {itemLeft, itemTop}
    },

    render() {
        const props = this.props;

        const listChildren = React.Children.map(this.props.children, (currentChild, index)=>{
            //console.log(props.itemHeigh);

            const itemWidth = this.getItemWidth(props.itemHeigh, props.aspectRatio);
            const itemPosition = this.getPositionItem(index, itemWidth);

            var positionStyle = {
                width: itemWidth,
                height: props.itemHeigh,
                position: 'absolute',
                transform: 'translate3d('
                            + itemPosition.itemLeft +'px,'
                            + itemPosition.itemTop +'px,0)',
            }
            
            return React.cloneElement(currentChild, 
                {   scrollList: this.moveList,
                    className: 'list-items',
                    index: index,
                    style:Object.assign({}, currentChild.props.style, positionStyle) 
                });
        });

        //console.log(listChildren.length);

        return (<div
            style={Object.assign({}, this.state.moveListStyle, props.style)}>
            {listChildren}
            </div>
        );
    }
});

export default caphList;