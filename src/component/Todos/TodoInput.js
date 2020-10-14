import React, { Component } from 'react';
import { Input } from 'antd';
import { EnterOutlined } from '@ant-design/icons'
import {addTodo} from '../../redux/actions'
import {connect} from "react-redux"
import axios from '../../config/axios'


class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
    }
  }
  onKeyUp = (e)=>{
    if(e.keyCode === 13 && this.state.description!== ''){ //判断enter键
      this.postTodo()
    }
  }
  postTodo = async()=>{
    const response = await axios.post('todos', {description: this.state.description})
    this.props.addTodo(response.data.resource)
    this.setState({description: ''})
  }
  render() {
    const {description} = this.state
    var suffix = description? <EnterOutlined onClick={this.postTodo} />:<span/>
    return (
      <div className="TodoInput" id="TodoInput">
        <Input
          placeholder="添加新任务"
          suffix={suffix}
          value={description}
          onChange={(e)=>{this.setState({description:e.target.value})}}
          onKeyUp={this.onKeyUp}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // todos: state.todos,
  ...ownProps
})

const mapDispatchToProps = { // 对象形式，addTodo键对应一个 acton creator, return的action会自动分发
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)