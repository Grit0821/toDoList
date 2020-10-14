import React, { Component } from 'react';
import {connect} from "react-redux"
import {initTodos} from '../../redux/actions'
import TodoInput from './TodoInput'
import axios from '../../config/axios'
import TodoItem from './TodoItem'
import './Todos.scss'

class Todos extends Component {
  addTodo = async (params)=>{
    const {todos} = this.state
    try {
      const response = await axios.post('todos', params)
      this.setState({todos:[response.data.resource,...todos]})
    } catch (e) {
      throw new Error(e)
    }
  }

  get unDeletedTodos(){
    return this.props.todos.filter(t => !t.deleted)
  }

  get unCompletedTodos(){
    return this.unDeletedTodos.filter(t => !t.completed)
  }

  get completedTodos(){
    return this.unDeletedTodos.filter(t => t.completed)
  }

  getTodos = async ()=>{
    const response = await axios.get('todos')
    const todos = response.data.resources.map(t => Object.assign({},t,{editing: false}))
    this.props.initTodos(todos)
  }

  componentDidMount(){
    this.getTodos()
  }

  render() {
    return (
      <div className="Todos" id="Todos">
        <TodoInput/>
        <div className="TodoLists">
          {this.unCompletedTodos.map(t => <TodoItem key={t.id} {...t} />)}
          { this.completedTodos.map(t => <TodoItem key={t.id} {...t} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = { // 对象形式，addTodo键对应一个 acton creator, return的action会自动分发
  initTodos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)