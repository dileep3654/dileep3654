import React from 'react'

export default function NameList() {
  const name=['dileep','abhi','pradeep']
  return (
    <div>{
      name.map(names => <h2>{names}</h2>)
    }</div>
  )
}

