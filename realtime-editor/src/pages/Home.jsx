import React, { useState } from 'react'
import {v4 } from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  const [roomId,setRoomId] = useState('')
  const [userName,setUserName] = useState('')


  const createNewRoom =(e) =>{
    e.preventDefault();
    const id = v4();
    // console.log(id);
    setRoomId(id)
    toast.success("Created a new room")

    
  };


  const joinRoom = () =>{
    if(!roomId || !userName){
      toast.error("ROOM ID & username is required!")
      return;
    }
    //Redirect 
    navigate(`/editor/${roomId}`, {
      state:{
        userName
      }
    })
  }

  const handleInputEnter = (e) =>{
    if(e.code === 'Enter' || e.code === 'NumpadEnter'){
      joinRoom()
    }
    // console.log(e.code);
    
  }
  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='HomePageLogo' 
        src="./code-sync.png" 
        alt="code-sync-logo" />

        <h4 className='mainLabel'>Paste invitation roomId</h4>

        <div className='inputGroup'>
          <input 
          type='text' 
          className='inputBox' 
          placeholder='ROOM ID'
          onChange={(e)=>setRoomId(e.target.value)} 
          value={roomId}
          onKeyUp={handleInputEnter}
          />
          <input 
          type='text' 
          className='inputBox' 
          placeholder='UserName' 
           onChange={(e)=>setUserName(e.target.value)} 
          value={userName}
          onKeyUp={handleInputEnter}
          />

          <button onClick={joinRoom} className='btn join'>JOIN</button>

          <span className='createInfo'>
            If you don't have invite create &nbsp;
            <a 
            onClick={createNewRoom} 
            href='' 
            className='createNewBtn'
            >
            new room
            </a>
          </span>
        </div>
      </div>

     
    </div>
    
  )
}
