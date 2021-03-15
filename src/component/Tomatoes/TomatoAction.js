import React, { Component } from 'react';
import { Button } from 'antd'
import axios from '../../config/axios'

class TomatoAction extends Component{

  startTomato = async ()=>{
    const response = await axios.post('tomatoes',{
      duration: 25*60*1000
    })
    console.log(response)
  }

  render(){
    return(
      <div className="TomatoAction" id="TomatoAction">
        <Button className="startTomatoButton" onClick={this.startTomato} >开始番茄</Button>
      </div>
    )
  }
}

export default TomatoAction