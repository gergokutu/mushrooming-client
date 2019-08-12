import React from 'react'

export default function ForestsList(props) {
  const forests = props.forestsList
  console.log('list test:', props.forestsList)

  return (
    <ul>
      {!forests && 'Loading...'}
      {forests && forests.map((forest, index) => <li key={index}>{forest.name}</li>)}
    </ul>
  )
}