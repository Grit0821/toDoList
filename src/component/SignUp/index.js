import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from '../../config/axios' //相对路径
import {Link} from 'react-router-dom'
import './SignUp.scss'


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: "",
      password: "",
      password_confirmation: ""
    }
  }

  onChangeAccount = (e) => {
    this.setState({account: e.target.value})
  }
  OnChangePassword = (e)=>{
    this.setState({password: e.target.value})
  }
  OnChangePasswordConfirmation = (e)=>{
    this.setState({password_confirmation: e.target.value})
  }
  submit = async ()=>{
    const {account, password, password_confirmation} = this.state
    try{
      await axios.post('sign_up/user',{
        account, password, password_confirmation
      })
      console.log("成功")
    }catch(err){
      throw new Error(err);
    }
  }
  render() {
    return (
      <div className="signUp" id="signUP">
        <h1>番茄闹钟注册</h1>
        <Input
          placeholder="请输入用户名"
          prefix={<UserOutlined className="site-form-item-icon" />}
          // value = {account}
          onChange = {this.onChangeAccount}
        />
        <Input.Password placeholder="密码" onChange={this.OnChangePassword} />
        <Input.Password placeholder="确认密码" onChange ={this.OnChangePasswordConfirmation} />
        <Button type="primary" className="loginButton" onClick={this.submit}>注册</Button>
        <p>如果你有账号，请立即<Link to="/login">登录</Link></p>
      </div>
    )
  }
}

export default SignUp