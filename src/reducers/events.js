import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// const initialState = { value: 0 }

export default(events = {}, action) => {
  switch(action.type){
    case READ_EVENTS:
      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    // case DECREMENT:
    //   return { value: state.value - 1 }
    default:
      return events
  }
}