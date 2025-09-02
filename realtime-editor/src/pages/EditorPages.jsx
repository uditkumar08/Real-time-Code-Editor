import React, { useState } from 'react'
import { Client } from '../components/Client'
import { Editor } from '../components/Editor'


export const EditorPages = () => {
  const [client,setClient] = useState([
    {socketId:1,username: "Abc k"},
    {socketId:2,username:"xyz p"},
    {socketId:3,username:"Udit joeee"}
  ])
  return (
    <div className='mainWrapper'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src='/code-sync.png' alt='logo' />
          </div>
          <h3>Connected</h3>
          <div className='clientList'>
            {
              client.map(client=>{
               return <Client key={client.socketId} username={client.username} />
              })
            }

          </div>
        </div>
        <button className='btn copyBtn'>Copy RoomId</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrap'>
        <Editor></Editor>
      </div>
    </div>
  )
}
