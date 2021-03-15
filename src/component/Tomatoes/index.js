import React, { Component } from 'react';
import TomatoAction from './TomatoAction'
import './Tomatoes.scss'

class Tomatoes extends Component{

  render(){
    return(
      <div className="Tomatoes" id="Tomatoes">
        <TomatoAction/>
      </div>
    )
  }
}

export default Tomatoes