import React from 'react'
import { Link } from 'react-router-dom'

export default function ForestsList(props) {
  const forests = props.forestsList

  return (
    <div className='forestList'>
      <header className='title'>
        Choose your Forest ;)
      </header>

      <ul>
        {!forests && 'Loading...'}
        {forests && forests.map(
          (forest) => {
            if (forest.status === 'finished') {
              return null
            } else {
              return <Link
                key={forest.id}
                to={`/forest/${forest.id}`}
                className='link'>
                <div>{forest.name}</div>
              </Link>
            }
          })
        }
      </ul>

      <form className='forestForm' onSubmit={props.onSubmit}>
        <h4 className='forestMake'>Or create your own!</h4>

        <label className='forestLabel'>Forest name:
          <input 
            type='text' 
            className='forestInput' 
            value={props.value} 
            onChange={props.onChange}
          />
        </label>

        <button type='submit' className='button'>Create</button>
      </form>

      <img 
        className='image' 
        src='https://biathlon-production.s3.wasabisys.com/images/event/image/71/mush_logo.jpg' 
        alt='mushrooms' 
      />
    </div>
  )
}