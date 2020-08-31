import React, { Component } from 'react';
import { Checkbox } from 'antd';

class TodoItem extends Component{
 
  render(){
    return(
      <div className="TodoItem" id="TodoItem">
        <Checkbox 
          checked={this.props.completed}
          onChange = {e => this.props.update(this.props.id,{completed: e.target.checked})} 
        />
        <span>{this.props.description}</span>
      </div>
    )
    
  }
}

export default TodoItem