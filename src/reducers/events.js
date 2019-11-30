import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  DELETE_EVENT,
  UPDATE_EVENT,
  READ_EVENT
} from '../actions'

// const initialState = { value: 0 }

export default(events = {}, action) => {
  switch(action.type){
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events,[data.id]: data }
    case READ_EVENTS:
      // console.log(action.response.data)
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    // case DECREMENT:
    //   return { value: state.value - 1 }
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}