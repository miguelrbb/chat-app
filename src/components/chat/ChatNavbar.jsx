import React, { useContext } from 'react'
import Cam from "../../images/cam.png";
import More from "../../images/more.png";
import Add from "../../images/add.png";
import { ChatContext } from '../../context/ChatContext';

function ChatNavbar() {
  const {data} = useContext(ChatContext);
  const photoURL = data.user.photoURL;

  return (
    <div className="navbar">
      <div className="chatInformation">
        {photoURL && <img src={data.user?.photoURL} alt="" />}
        <span>{data.user?.displayName}</span>
      </div>
      <div className="chatIcons">
          <img src={Add} alt="add"/>
          <img src={Cam} alt="camera"/>
          <img src={More} alt="more"/>
        </div>
    </div>
  )
}

export default ChatNavbar