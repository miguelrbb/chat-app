import React from 'react';
import ChatNavbar from './ChatNavbar.jsx';
import Messages from '../Messages.jsx';
import Input from './Input.jsx';

function Chat() {
  return (
    <div className="chat">
      <ChatNavbar />
      <Messages />
      <Input />
    </div>
  )
}

export default Chat