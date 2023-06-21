import React from 'react'

function ChildComponnent(props) {
  return (
    <div>
        <button onClick={()=>props.greetParent('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponnent