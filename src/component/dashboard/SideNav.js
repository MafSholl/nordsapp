import React from 'react'
import {BsFillWalletFill, BsList} from "react-icons/bs"
import { useState } from 'react'

const SideNav = () => {
    const [width, setWidth] = useState("20%")
    const [activeLink, setActiveLink] = useState(null)
    let activeStyle = {backgroundColor: "474747", color: 'var(--primary_green'}

    const links = ["events", "analytics", "marketing"]

    function toggleWidth() {
        width === "20%" ? setWidth("8%") : setWidth("20%")
    }

  return (
    <div className='dashboardSideNav' style={{width : width}}>
        <div className='sideNavLogoSection'>
            <div id='sideNavLogo'>
                N
            </div>
            <div id='sideNavHamburger'>
                <BsList color='white' display= "flex" fontSize={22} onClick={toggleWidth} cursor='pointer' />
            </div>
        </div>
        <div className='sideNavLinks'>
            <div className='links'>
                {links.map((link, index) =>
                    <button className='link'
                        key={index}
                        onClick={() => setActiveLink(link)}
                        style={activeLink === link ? activeStyle : {color : 'white'}}>
                        <BsFillWalletFill fontSize={20}
                            style = {width === "20%" && {marginRight: "20px"}}
                            color= {activeLink === link ? 'var(--primary_green)' : 'white'}/>
                        {width === "20%" && link}
                    </button>
                )}
  
            </div>
        </div>
    </div>
  )
}

export default SideNav