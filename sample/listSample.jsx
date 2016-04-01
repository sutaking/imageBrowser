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
        return (
            <div className={this.state.listClass} style={this.state.newListStyle}>
                <CaphList key={'11'} onBoxFocus={this.handleBoxFocus} title={'Group1'} num={200} index={0} 
                />
                <CaphList key={'12'} onBoxFocus={this.handleBoxFocus} title={'Group2'} num={10} index={1}
                />
                <CaphList key={'13'} onBoxFocus={this.handleBoxFocus} title={'Group3'} num={10} index={2}
                />
                <CaphList key={'14'} onBoxFocus={this.handleBoxFocus} title={'Group4'} num={10} index={3}
                />
            </div>
        );
    }
});

module.exports = listDemo;