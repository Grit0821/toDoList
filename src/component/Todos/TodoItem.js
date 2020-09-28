import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { EnterOutlined, DeleteOutlined } from "@ant-design/icons"

class TodoItem extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      editText: this.props.description
    }
  }
  toEditing = ()=>{
    const {id} = this.props
    this.props.toEditing(id)
  }
  

  update = (params)=>{
    const {id} = this.props
    this.props.update(id,params)
  }

  onKeyUp = (e)=>{
    if(e.keyCode === 13 && this.state.editText){
      const {editText} = this.state
      this.update({description: editText})
    }
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
          <EnterOutlined />
          <DeleteOutlined onClick={e => this.update({deleted:true})}/>
        </div>
      </div>
    )
    const Text =<span onDoubleClick={this.toEditing} >{description}</span>
    return(
      <div className="TodoItem" id="TodoItem">
        <Checkbox 
          checked={completed}
          onChange = {e => this.update({completed: e.target.checked})} 
        />
        {this.props.editing ? Editing : Text}  
      </div>
    )
    
  }
}

export default TodoItem