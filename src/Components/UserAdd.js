import React, { Component } from 'react'

class UserAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    handleSubmit() {
        console.log(this.refs.value.value)
        console.log(this.props)
        //使用从Route组件传递的props
        this.props.history.push("/user/list")
    }
    change(e) {
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
    }
    render() {
        return (<div>
            <input type="text" ref="value" onChange={(e) => this.change(e)} value={this.state.value} />
            <button onClick={() => this.handleSubmit()}>添加</button>
        </div>)
    }
}

export default UserAdd;