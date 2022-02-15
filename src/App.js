import Login from './LoginPage/Login'
import AdminMainPage from './AdminMainPage'
import UserMainPage from './UserMainPage'

import React, { useState } from 'react';

export default function App(){
    const[count,setcount] =useState(1);

    return(
        <div>
           {
              (count==0)?<Login/>: (count==1)?<AdminMainPage/>:<UserMainPage/> 
           }
        </div>
    )
}