import React from 'react';

import CaphList from '../src/ui/caphList';
import CaphListItem from '../src/ui/caphListItem';


const getStyles = () => {

    const styles = {
        listArea: {
            position: 'relative',
            top: 10,
            left: 30,
            height: 200,
            width:1920,
            marginBottom: 50,
            //background:'red'
        }
    };

    return styles;
};

var listDemo = React.createClass({
    getInitialState() {
        return {
            listClass: 'list-warpper'
        };
    },

    handleBoxFocus(index) {
        var distance = -350 * index;
        var newListStyle = {
            transform: 'translate3d(0px, ' + distance + 'px, 0)',
            transition:'transform .8s ease-out'
        };
        this.setState({
            newListStyle: newListStyle 
        });
    },

    setItems(_index, _num) {
        var items = [];
        var currentIndex = _index;

        var setInit = function(index) {
            var val = false;
            if (index === 0 && currentIndex === 0){val = true;}
            return {initialFocus: val};
        };

        var getItemStyle = function (index) {
            return {
                color: '#eee',
                fontSize: 60,
                lineHeight: '165px',
                textAlign: 'center',
                background: 'url(./img/'+index%15+'.jpg) 100% 100% no-repeat', 
                backgroundSize:'100% 100%'
            }
        };

        for(var i=0; i<_num; ++i) {
            items.push(< CaphListItem 
                key={i}
                focusable = {setInit(i)}
                style={getItemStyle(i+4*_index)}/>);
                //onBoxFocus={_handleBoxFocus}
                //listAreaIndex={_index}
        }

        return items;
    },

    render() {

        var listArray = [
            //{num:10, title:'Amazon '},
            /*{num:200, title:'UA '},
            {num:18, title:'TaoBao '},
            {num:10, title:'Samsung '},
            {num:10, title:'Apple '},
            {num:10, title:'Bing '},
            {num:10, title:'Google '},*/
            //{num:30, title:'Mi '},
            {num:300, title:'TOYOTA '}];
        
        var _setItems = this.setItems;

        const styles = getStyles();

        return (
            <div className={this.state.listClass} style={this.state.newListStyle}>
                {listArray.map(function(data, i) {
                    return <div key={i}>
                        <div className={'list-title'}>{data.title+i}</div>

                        <CaphList 
                            itemHeigh={200}
                            aspectRatio={1}
                            padding={10}
                            direction={'h'}
                            cols={4}
                            style={styles.listArea}
                        >
                            {_setItems(i, data.num)}
                        </CaphList>

                    </div>;
                })}
            </div>
        );
    }
});

module.exports = listDemo;