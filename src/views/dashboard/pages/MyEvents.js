import React from 'react'
import "./myEvents.css"

const MyEvents = () => {
  return (
    <div>
      <div className='my-events-header'>
        <div className='my-events-header-filter'>
          <input type="date" />
        </div>
        <div className='my-events-header-search'>
          <input type="date" />
        </div>
        <button>Create event</button>
      </div>
    </div>
  )
}

export default MyEvents