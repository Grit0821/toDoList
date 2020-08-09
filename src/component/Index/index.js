import React, { Component } from 'react';
import {Button} from 'antd'
import axios from '../../config/axios'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }
  componentWillMount(){
    this.getMe()
  }
  getMe = async ()=>{
    try{
      const response = await axios.get('me')
      this.setState({user: response.data})
    }catch(e){
       
    }
  }
  logout = ()=>{ // 清空token验证，跳转登录页
    localStorage.setItem('x-token','') 
    this.props.history.push('/login')  
  }
  render() {
    return (
      <div>
        <p>欢迎，{this.state.user.account}</p>
        <Button onClick={this.logout}>注销</Button>
      </div>
    )
  }
}

export default Index