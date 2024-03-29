import React from 'react'

const MyEvent = ({event}) => {

  return (
    <div className='event-card'>
        <div className='image-container'
            style={{
                backgroundImage: "url(https://images.pexels.com/photos/7406066/pexels-photo-7406066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            }}>
            
        </div>
        <div className='event-details'>
            <p>Event Title</p>
            <h5>{event.title}</h5>
            <p>Event Description</p>
            <h5>{event.desciption}</h5>
        </div>
        <div className='event-actions'>
            <button>View details</button>
        </div>
    </div>
  )
}

export default MyEvent