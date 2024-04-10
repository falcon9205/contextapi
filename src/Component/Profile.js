import React, { useContext } from 'react'
import userContext from '../Context/UserContext'

const Profile = () => {
   
    const {user} = useContext(userContext)
    console.log(user);
    if(user==null || user.username==null) return <div> please login</div>

    return <div> Welcome {user.username} </div>
  
}

export default Profile
