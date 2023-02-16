import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Chat from '../components/chat/Chat.jsx';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
