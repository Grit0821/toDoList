import React, { Component } from 'react';
import { Input } from 'antd';
import { EnterOutlined } from '@ant-design/icons'


class TodoInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: '',
    }
  }
  onKeyUp = (e)=>{
    if(e.keyCode === 13 && this.state.description!== ''){ //判断enter键
      this.addTodo()
    }
  }
  addTodo = ()=>{
    this.props.addTodo({description: this.state.description}) // 提交新todo
    this.setState({description: ''})
  }
  render() {
    const {description} = this.state
    var suffix = description? <EnterOutlined onClick={this.addTodo} />:<span/>
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

export default TodoInput