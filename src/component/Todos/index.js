import React, { Component } from 'react';
import TodoInput from './TodoInput'
import axios from '../../config/axios'
import TodoItem from './TodoItem'
import './Todos.scss'

class Todos extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo = async (params)=>{
    const {todos} = this.state
    try {
      const response = await axios.post('todos', params)
      this.setState({todos:[response.data.resource,...todos]})
    } catch (e) {
      throw new Error(e)
    }
  }

  getTodos = async ()=>{
    try {
      const response = await axios.get('todos')
      const todos = response.data.resources.map(t => Object.assign({},t,{editing: false}))
      this.setState({
        todos: todos
      })
    } catch (e) {
      throw new Error(e)
    }
  }

  updateTodo = async (id, params)=>{
    const {todos} = this.state
    try {
      const response = await axios.put(`todos/${id}`,params)
      const newTodos = todos.map(t => t.id === id? response.data.resource : t)
      this.setState({todos: newTodos})
    } catch (e) {
      throw new Error(e)
    }
  }

  toEditing = (id) => {
    const todos = this.state.todos
    const newTodos = todos.map(t => {
      if(t.id === id){
        return Object.assign({}, t, {editing: true})
      }else{
        return Object.assign({}, t, {editing: false})
      }  
    })
    this.setState({todos: newTodos})
  }

  componentDidMount(){
    this.getTodos()
  }

  render() {
    return (
      <div className="Todos" id="Todos">
        <TodoInput addTodo={this.addTodo} />
        <main>
          {
            this.state.todos.map(t => <TodoItem key={t.id} {...t}  update={this.updateTodo} 
              toEditing = {this.toEditing}
            />)
          }
        </main>
      </div>
    )
  }
}

export default Todos