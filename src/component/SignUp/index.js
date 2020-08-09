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
  onChange = (key, value) =>{
    this.setState({[key]: value}) // 注意此处用变量做key值
  }
  submit = async ()=>{
    const {account, password, password_confirmation} = this.state
    try{
      await axios.post('sign_up/user',{
        account, password, password_confirmation
      })
      console.log("成功")
    }catch(err){
      throw new Error('信息获取失败');
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
          onChange = {(e)=>{this.onChange('account', e.target.value)}}
        />
        <Input.Password placeholder="密码" onChange={this.OnChangePassword} />
        <Input.Password placeholder="确认密码" onChange ={(e)=>{this.onChange('password', e.target.value)}} />
        <Button type="primary" className="signUpButton" onClick={this.submit}>注册</Button>
        <p>如果你有账号，请立即<Link to="/login">登录</Link></p>
      </div>
    )
  }
}

export default SignUp