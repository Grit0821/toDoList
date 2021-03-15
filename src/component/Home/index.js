import React, { Component } from 'react';
import {Dropdown, Menu } from 'antd'
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import Todos from '../Todos'
import Tomatoes from '../Tomatoes'
import history from '../../config/history'
import axios from '../../config/axios'
import './Home.scss'

const logout = () => { // 清空token验证，跳转登录页
  localStorage.setItem('x-token', '')
  history.push('/login')
}
const menu = (
  <Menu >
    <Menu.Item key="1" icon={<UserOutlined />}>
      个人设置
    </Menu.Item>
    <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
      注销
    </Menu.Item>
  </Menu>
);

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentWillMount() {
    this.getMe()
  }
  getMe = async () => {
    try {
      const response = await axios.get('me')
      this.setState({ user: response.data })
    } catch (e) {

    }
  }

  render() {
    return (
      <div className='Home' id="Home">
        <header>
          <span className="logo">LOGO</span>
          <Dropdown overlay={menu}>
            <span>
            {this.state.user.account} <DownOutlined />
            </span>
          </Dropdown>
        </header>
        <main>
          <Tomatoes/>
          <Todos/>
        </main>
      </div>
    )
  }
}

export default Home