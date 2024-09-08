import React, { useEffect } from 'react'
import Livemessage from './Livemessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const Livechat = () => {
  const dispatch=useDispatch();
  //const chatMessage=useSelector((store) => store.chat.message);
  useEffect(() => {
    const timer=setInterval(() => {
    },2000);

    return () => {
      clearInterval(timer);
    }
  })
  return (
    <div className="py-4 gap-3">
     <Livemessage/>
     <Livemessage/>
     
    </div>
  )
}

export default Livechat