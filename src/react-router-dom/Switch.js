import React, { Component } from 'react'
import pathToRegExp from 'path-to-regexp'
import { Consumer } from './context'
class Switch extends Component {
    render() {
        return <Consumer>
            {state => {
                let pathname = state.location.pathname;
                let children = this.props.children;
                for (let i = 0; i < children.length; i++) {
                    let child = children[i];
                    //Redirect 可能没有path属性      
                    let path = child.props.path || "";
                    let reg = pathToRegExp(path, [], { end: false })
                    //Switch匹配成功  
                    if (reg.test(pathname)) {
                        return child //把匹配到的组件返回即可
                    }
                }
                return null;
            }}
        </Consumer>
    }
}
export default Switch;