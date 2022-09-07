import React, { useEffect} from 'react'
import MyEvent from './MyEvent'
import "./myEvents.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setEvents } from '../../../../redux/actions/events'
import { useNavigate } from 'react-router-dom'

const MyEvents = () => {
  // const[eventData, setEventData] = useState([])
  const dispatch = useDispatch()
  const {events: eventData} =  useSelector((state) => state.eventReducer)

  useEffect(()=>{
    eventData.length < 1 && axios.get(`http://localhost:5000/fakeEvents`)
            .then((result) => dispatch(setEvents(result.data)))
            .catch((error) => console.log(error))
  }, [])

  const navigate = useNavigate()

  return (
    <div className='my-events-container'>
      <div className='my-events-header'>
        <div className='my-events-header-filter'>
          <div>
            <p>Filter By date</p>
            <input type="date" id="filter-date"/>
          </div>
          <div>
            <p>Search Events</p>
            <input type="search" id="filter-search"/>
          </div>
        </div>
        {/* onClick={() => navigate("/dashboard") */}
        <button onClick={() => navigate("/dashboard/create-event")}>Create event</button>
      </div>

      <div className='my-events-cards'>
        {eventData.length > 0 
          ? eventData.map((event, index) => <MyEvent key= {index} event={event}/>)
          : <h5 style={{textAlign: 'center'}}>No Event</h5>
        }
      </div>
    </div>
  )
}

export default MyEvents