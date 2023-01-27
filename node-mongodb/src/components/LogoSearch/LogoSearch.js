import React from 'react'
import logo from '../../images/startcom-logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img style={{width:80,heigth:40}}  src={logo} alt=""/>  
        <div className='Search'>
        <input type="text" placeholder='Explore'/>
        <div className='s-icon'>
          <UilSearch/>
        </div>
        </div>
        
    </div>
  )
}

export default LogoSearch