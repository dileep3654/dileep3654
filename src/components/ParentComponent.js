import React, { Component } from 'react'
import ChildComponnent from './ChildComponnent.'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
      alert(`HELLO ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
        <ChildComponnent greetParent={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent