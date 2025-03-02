import React from 'react'
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const { id } = useParams(); 
  return (
    <div className='text-center'> 
    <h1>Profile Page</h1>
    <p>Welcome, User ID: {id}</p>
  </div>
  )
}

export default ProfilePage