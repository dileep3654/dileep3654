import React, { Component, memo } from 'react'

export class UserGreetigs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isvalue:false
    }
  }
  handleInputValue(){
    this.setState({
      isvalue : !this.state.isvalue
    })
  }
  render() {
    let message
    if(this.state.isvalue){
      message= <div>welcome bro</div>
    }else{
      message = <div>welcome mawa</div>
    }
    return (
      <div>
        <p>{message}</p>
        <button onClick={()=>this.handleInputValue()}>Submit</button>
        </div>
    )
  }
}

export default UserGreetigs