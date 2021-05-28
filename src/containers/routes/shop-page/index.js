import React, {Component} from 'react';
import ComponenctA from "./componenctA";
import ComponenctB from "./componenctB";

class Shop extends Component {
    state = {
        countA: 0,
        countB: 0,
        countC: 0,
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <button onClick={() => this.setState({countA: 1})}>Change CountA</button>
                    <button onClick={() => this.setState({countB: 1})}>Change CountB</button>
                    <button onClick={() => this.setState({countC: 1})}>Change CountC</button>
                </div>
                <ComponenctA countA={this.state.countA}/>
                <ComponenctB countB={this.state.countB} countC={this.state.countC}/>
            </div>
        );
    }
}

export default Shop;