import React, { Component } from 'react';
import {Button} from 'antd'

class Index extends Component {

  login = ()=>{ // 箭头函数后续调用避免绑定this
    // console.log(this.props);
    this.props.history.push('login')   
  }
  render() {
    return (
      <div>
        <div>Index</div>
        <Button onClick={this.login}>登录</Button>
      </div>
    )
  }
}

export default Index