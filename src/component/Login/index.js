import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from '../../config/axios' //相对路径
import {Link} from 'react-router-dom'
import './Login.scss'
import history from '../../config/history'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: "",
      password: "",
    }
  }
  onChange = (key, value) =>{
    this.setState({[key]: value}) // 注意此处用变量做key值
  }
  submit = async ()=>{
    const {account, password} = this.state
    try{
      await axios.post('sign_in/user',{
        account, password
      })
      console.log("成功")
    }catch(err){
      throw new Error(err);
    }
    history.push('')
  }
  render() {
    return (
      <div className="login" id="login">
        <h1>番茄闹钟登录</h1>
        <Input
          placeholder="请输入用户名"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange = {(e) => {this.onChange('account', e.target.value)}}
        />
        <Input.Password placeholder="密码"  onChange = {(e) => {this.onChange('password', e.target.value)}} />
        <Button type="primary" className="loginButton" onClick={this.submit}>登录</Button>
        <p>如果你没有账号，请立即<Link to="/signUp">注册</Link></p>
      </div>
    )
  }
}

export default Login