import React from 'react'

export default function ForestsList(props) {
  // const { forests } = props.forestslist
  console.log('list test:', props)

  return (
    <ul>
      <li>Forest1</li>
      <li>Forest2</li>
      <li>Forest3</li>
      {/* {!forests && 'Loading...'}
      {forests && forests.map((forest, index) => <li key={index}>{forest.name}</li>)} */}
    </ul>
  )
}
