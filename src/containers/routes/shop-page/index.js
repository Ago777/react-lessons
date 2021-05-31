import React, {Component, useState, useEffect} from 'react';

class Shop extends Component {
    state = {
        background: ''
    }

    a = () => {
        this.setState({
            background: 'green'
        })
    };
    b = () => {
        this.setState({
            background: 'red'
        })
    };
    c = () => {
        this.setState({
            background: 'black'
        })
    }


    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '200px'}}>
                        <button onClick={this.a}>GREEN</button>
                        <button onClick={this.b}>RED</button>
                        <button onClick={this.c}>BLACK</button>
                    </div>
                    <div style={{width: '200px', height: '200px', border: '1px solid black', background: this.state.background}}/>
                </div>
            </div>
        );
    }
}

export default Shop;