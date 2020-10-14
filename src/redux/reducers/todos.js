import {ADD_TODO} from '../actionTypes'

export default (state = [], action)=>{
  switch(action.type){
    case ADD_TODO:
      return [action.payload, ...state]
    default:
      return state
  }
}