import React from 'react'
import { Link } from 'react-router-dom'

export default function ForestsList(props) {
  const forests = props.forestsList

  return (
    <div>
      <header>
          Choose your Forest ;)
      </header>
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
      <form className='forestForm' onSubmit={props.onSubmit}>
        <h4>Make new forest!</h4>
        <label>Forest name:<input type='text' value={props.value} onChange={props.onChange}></input></label>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}