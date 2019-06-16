import React, { Component } from 'react';
import { Consumer } from './context'
import pathToRegExp from 'path-to-regexp'
class Route extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Consumer>
      {(state) => {
        console.log(state)
        console.log(this.props)
        //path 是route中传递的
        let { path, component: Component, exact = false } = this.props;
        //pathname是location中的
        let pathname = state.location.pathname
        // 根据path实现一个正则 通过正则匹配
        let reg = pathToRegExp(path, [], { end: exact })
        if (pathname.match(reg)) {
          return <Component></Component>
        }
        return null
      }}
    </Consumer>;
  }
}

export default Route;
