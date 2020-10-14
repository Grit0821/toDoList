import {ADD_TODO} from "./actionTypes"

const addTodo = (payload)=>{
  return {
    type: ADD_TODO,
    payload
  }
}

export {addTodo,}

