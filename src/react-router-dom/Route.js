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
        let keys = [];
        let reg = pathToRegExp(path, keys, { end: exact })
        keys = keys.map(item => item.name) //模糊匹配的参数 [id]
        let result = pathname.match(reg)
        let [url, ...values] = result || [];// [1,2 ]
        let props = { //props传递到子元素中使用
          location: state.location,
          history: state.history,
          match: {
            params: keys.reduce((obj, current, idx) => {
              obj[current] = values[idx];
              return obj;
            }, {})
          }
        }
        if (result) {
          return <Component {...props}></Component>
        }
        return null
      }}
    </Consumer>;
  }
}

export default Route;
