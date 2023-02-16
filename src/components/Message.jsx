import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'

function Message({message}) {
  const {currentUser} = useContext(AuthContext); 

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({behaviour:"smooth"})
  }, [message])

  return (
    <div 
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && 'owner'}`}
    >
      <div className='messageContent'>
        <div className='mainContent'>
          {message.img && <img src={message.img} alt="" />}
          {message.text && <p>{message.text}</p>}
        </div>
        <span>10:44</span>
      </div>
    </div>
  )
}

export default Message