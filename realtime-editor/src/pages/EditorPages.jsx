import React, { useState } from 'react'

export const EditorPages = () => {
  const [client,setClient] = useState([
    {socketId:1,username: "Abc k"},
    {socketId:2,username:"xyz p"}
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
            
          </div>
        </div>
      </div>
      <div className='editorWrap'>Editor goes here....</div>
    </div>
  )
}
