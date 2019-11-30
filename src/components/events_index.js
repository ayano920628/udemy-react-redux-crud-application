// import React from 'react';
// import PropTypes from 'prop-types';
// import { directive } from '@babel/types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
// const App = () => (<Counter></Counter>)
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventsIndex  extends Component {
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
  componentDidMount(){
    this.props.readEvents();
  }

  renderEvents(){
    return _.map(this.props.events, event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    // const props = this.props
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to='/events/new'>New Event</Link>
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

const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

// export default App;
