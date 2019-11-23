// import React from 'react';
// import PropTypes from 'prop-types';
// import { directive } from '@babel/types';
import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0}
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}
// const App = () => {
//   const profiles = [
//     { name: 'Taro', age: 10 },
//     { name: 'Hana', age: 15 },
//     { name: 'Yuki', age: 20 },
//   ]
//   return (
//     <React.Fragment>
//       {/* <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("hello")}} /> */}
//       {
//         profiles.map((profile, index) => {
//           return <User name={profile.name} age={profile.age} key={index} />
//         })
//       }
//     </React.Fragment>
//   );
// }

// const User = (props) => {
//   return (
//     <div>Hi, I am {props.name}, and {props.age} years old.</div>
//   );
// }

// User.defaultProps = {
//   age: 1
// }
// User.propTypes = {
//   name: PropTypes.string,
//   age : PropTypes.number.isRequired
// }

export default App;
