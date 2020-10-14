import {ADD_TODO, INIT_TODOS, UPDATE_TODO,EDIT_TODO} from "./actionTypes"

const addTodo = (payload)=>{
  return {
    type: ADD_TODO,
    payload
  }
}
const initTodos = (payload)=>{
  return {
    type: INIT_TODOS,
    payload
  }
}

const updateTodo = (payload)=>{
  return {
    type: UPDATE_TODO,
    payload
  }
}

const editTodo = (payload) =>{
  return {
    type: EDIT_TODO,
    payload
  }
}

export {addTodo,initTodos, updateTodo, editTodo}

