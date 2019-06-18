import React, { Component } from 'react';
import { Provider } from './context'
class HashRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || "/"
      }
    }
  }
  componentDidMount() {
    //默认hash没有值 跳转到 /
    window.location.hash = window.location.hash || "/";
    // 监听hash值变化 重新设置状态
    window.addEventListener("hashchange", () => {
      this.setState({
        location: {
          // 先把原始的值保存一下 避免存在多值的情况
          ...this.state.location,
          pathname: window.location.hash.slice(1) || "/"
        }
      })
    })
  }
  render() {
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    }
    return (<Provider value={value}>
      {this.props.children}
    </Provider>);
  }
}

export default HashRouter;
