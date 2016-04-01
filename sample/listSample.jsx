import React from 'react';
import CaphList from '../src/ui/caphList.jsx';


var listDemo = React.createClass({
    getInitialState() {
        return {
            listClass: 'list-warpper'
        };
    },

    handleBoxFocus(index) {
        //console.log('move...');
        
        var distance = -350 * index;
        var newListStyle = {
            transform: 'translate3d(0px, ' + distance + 'px, 0)',
            transition:'transform .8s ease-out'
        };
        this.setState({
            newListStyle: newListStyle 
        });
    },
    render() {
        var _handleBoxFocus = this.handleBoxFocus;

        var listArray = [
            {num:200, title:'Amazon '},
            {num:10, title:'UA '},
            {num:10, title:'TaoBao '},
            {num:10, title:'Samsung '},
            {num:10, title:'Apple '},
            {num:10, title:'Bing '},
            {num:10, title:'Google '},
            {num:10, title:'Mi '},
            {num:10, title:'TOYOTA '}];

        return (
            <div className={this.state.listClass} style={this.state.newListStyle}>
                {listArray.map(function(data, i) {
                    return <div key={i}>
                        <div className={'list-title'}>{data.title+i}</div>
                        <CaphList
                        index={i}
                        onBoxFocus={_handleBoxFocus} 
                        num={data.num} 
                        />
                    </div>;
                })}
            </div>
        );
    }
});

module.exports = listDemo;