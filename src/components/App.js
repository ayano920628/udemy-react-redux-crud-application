// import React from 'react';
// import PropTypes from 'prop-types';
// import { directive } from '@babel/types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
// const App = () => (<Counter></Counter>)

class App  extends Component {
  // constructor(props){
  //   super(props);
    // this.state = {count: 0}
  // }
  // handlePlusButton = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }
  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
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

const mapStateToProps = state => ({ value: state.count.value })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
