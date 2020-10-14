import React, { Component } from 'react';
import {connect} from "react-redux"
import { Checkbox } from 'antd';
import axios from '../../config/axios'
import { EnterOutlined, DeleteOutlined } from "@ant-design/icons"
import { updateTodo, editTodo} from '../../redux/actions'
import classNames from 'classnames'
import './TodoItem.scss'

class TodoItem extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      editText: this.props.description
    }
  }
  editTodo = ()=>{
    const {id} = this.props
    this.props.editTodo(id)
  }
  
  updateTodo = async (params)=>{
    const {id} = this.props
    const response = await axios.put(`todos/${id}`,params)
    this.props.updateTodo(response.data.resource)
  }

  onKeyUp = (e)=>{
    if(e.keyCode === 13 && this.state.editText){
      const {editText} = this.state
      this.updateTodo({description: editText})
    }
  }

  enterHandle = ()=>{
    const {editText} = this.state
    this.updateTodo({description: editText})
  }

  render(){
    const {description, completed} = this.props
    const Editing = (
      <div className="editing">
        <input type="text" value={this.state.editText} 
          onChange={e=>this.setState({editText: e.target.value})} 
          onKeyUp={this.onKeyUp}
        />
        <div className="iconWrapper">
          <EnterOutlined  onClick={this.enterHandle}/>
          <DeleteOutlined class="icon" onClick={e => this.updateTodo({deleted:true})}/>
        </div>
      </div>
    )
    const Text = <span className="text" onDoubleClick={this.editTodo} >{description}</span>
    const todoItemClass = classNames({
      TodoItem: true,
      editing: this.props.editing,
      completed: this.props.completed
    })
    return(
      <div className={todoItemClass} id="TodoItem">
        <Checkbox 
          checked={completed}
          onChange = {e => this.updateTodo({completed: e.target.checked})} 
        />
        {this.props.editing ? Editing : Text}  
      </div>
    )
    
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = { // 对象形式，addTodo键对应一个 acton creator, return的action会自动分发
  updateTodo,
  editTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)