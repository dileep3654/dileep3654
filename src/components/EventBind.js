import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    clickHandler(){
        this.setState({

        })
        console.log(this);
    }
  render() {
    return (
      <div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        <button onClick={this.clickHandler.bind(this)}>click</button>
      </div>
    )
  }
}

export default EventBind