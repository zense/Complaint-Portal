import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNav(props) {
  return (
    <div class='top-0 left-0 justify-center h-screen m-0 flex flex-col text-white shadow-lg bg-inherit'>
      <button class='sidebar-text mt-8' onClick={()=>{props.handleClick(1)}} ><p class="text-white">Complaints</p></button>
      <Link to='/'>
        <button class='sidebar-text mx-auto mb-20' onClick={()=>{props.LogOutUser()}}><p class="text-white">Log Out</p></button>
      </Link>
    </div>
  )
}
