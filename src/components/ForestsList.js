import React from 'react'
import { Link } from 'react-router-dom'

export default function ForestsList(props) {
  const forests = props.forestsList
  console.log('list test:', props.forestsList)

  return (
    <ul>
      {!forests && 'Loading...'}
      {forests && forests.map(
        (forest) => 
          <Link 
            key={forest.id}
            to={`/forest/${forest.id}`}
          >
              <div>{forest.name}</div>
          </Link>
        )
      }
    </ul>
  )
}