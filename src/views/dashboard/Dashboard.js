import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '../../component/dashboard/Container';
import MyEvents from './pages/MyEvents';
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path="/" element={<MyEvents/>}/>
            </Routes>
        </Container>
    </div>
  )
}

export default Dashboard