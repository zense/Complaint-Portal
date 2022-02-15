import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNav(props) {
  return (
    <div class='top-0 left-0 h-full  m-0 flex flex-col text-white shadow-lg bg-gray-900'>
      <button class='sidebar-text mt-8' onClick={()=>{props.handleClick(1)}} >Complaints</button>
      <Link to='/'>
        <button class='sidebar-text mx-auto mb-20' onClick={()=>{props.LogOutUser()}}>Log Out</button>
      </Link>
    </div>
  )
}