import React, { Component } from 'react';
import TodoInput from './TodoInput'
import axios from '../../config/axios'
import './Todos.scss'

class Todos extends Component {
  addTodo = async (params)=>{
    try {
      const response = await axios.post('todos', params)
      console.log(response.data)
    } catch (e) {
      throw new Error(e)
    }
  }
  render() {
    return (
      <div className="Todos" id="Todos">
        <TodoInput addTodo={this.addTodo} />
      </div>
    )
  }
}

export default Todos