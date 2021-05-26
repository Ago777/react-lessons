import React, {Component, useState, useEffect} from 'react';
//
// const Shop = props => {
//     let timerId;
//     const [count, setCount] = useState(0);
//     const [show, toggleShow] = useState(true);
//
//     useEffect(() => {
//         toggleShow(true);
//         timerId = setTimeout(() => toggleShow(false), 2000);
//         return () => clearTimeout(timerId);
//     }, [count])
//
//     return (
//             <div>
//                 <h1>Clicked {count} times</h1>
//                 {!show && <button onClick={() => setCount(count + 1)}>Show Text</button>}
//                 {show && <h1>Some Text</h1>}
//             </div>
//     );
// };

// class Shop extends Component {
//     timerId;
//     state = {
//         count: 0,
//         show: true
//     }
//
//     componentDidMount() {
//         this.timerId = setTimeout(() => this.setState({show: false}), 2000)
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (this.state.count !== prevState.count) {
//             this.setState({show: true})
//             this.timerId = setTimeout(() => this.setState({show: false}), 2000)
//         }
//     }
//
//     componentWillUnmount() {
//         clearTimeout(this.timerId);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Clicked {this.state.count} times</h1>
//                 {!this.state.show &&
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>Show Text</button>}
//                 {this.state.show && <h1>Some Text</h1>}
//             </div>
//         );
//     }
// }

export default Shop;