import React, {useRef, useEffect, useState} from 'react'
import {saveMessageAction, saveMsginDB} from '../actions/Chat'
import { useDispatch, useSelector } from 'react-redux';
import socketIO from 'socket.io-client'
import Reactscroll from "react-scroll-to-bottom"
import './ChatArea.css'
const ChatArea = ( ) => {
const dispatch = useDispatch()
    const msgRef = useRef()
    const [showM, setShowM] = useState(true)

    const openedChatID = useSelector((state) => {
        if(!state.myweb2.openedChat)
            return ""
        else
            return state.myweb2.openedChat._id;        
    })
//

    const fetchMsgs = useSelector((state) => {
    if(!state.myweb2.openedChat)
        return []
    else
        return state.myweb2.openedChat.messages;        
})

var saveMsgError = useSelector((state) => {
    if(!state.myweb2.openedChat)
        return ""
    else
        return state.myweb2.openedChat.saveMsgError;        
})

// const [messages, setMesages] = useState(fetchMsgs)
const ENDPOINT = 'http://localhost:5000'  
const {user} = useSelector((state) => {
    return state.myweb
})

var socket = socketIO(ENDPOINT, {  
    cors: {
    // origin: "ws://echo.websocket.org",
    origin: "ws://localhost:5000/socket.io/?EIO=4&transport=websocket",
    credentials: true
  },transports : ['websocket'] });

  const sendHandler = (e) => {
      e.preventDefault();
      
      socket.emit("MSGG", {text: msgRef.current.value, sender: user.username});
     dispatch(saveMsginDB(openedChatID, msgRef.current.value, user.username))
    // document.getElementById('inputID').innerHTML = "";
    msgRef.current.value = ""
  }

  useEffect(() => {

    socket.on("connect", () => {
        socket.emit("joined", user)
    })
    // socket.emit("joined", "Hey hello, I'm Fox")
    socket.on("sentmsg", (args) => {
        console.log(args)
    })

    return () => {
        // socket.emit('disconnect');
        socket.off();
    }
}, [])


useEffect(() => {

 socket.on("RECEIVEDMSG", (args) => {
    //setMesages([...messages, {text: args.text, sender: args.sender}]);
    var newMArray = [...fetchMsgs, {text: args.text, sender: args.sender}]
    dispatch(saveMessageAction(newMArray))
 })

    return () => {
        // socket.emit('disconnect');
        socket.off();
    }
}, [socket])


    return (
<div className='chatarea'>
{ showM === false ? <center>Select a chat first!</center> :
    <Reactscroll className='chatareaclass'>
    { 
        fetchMsgs?.map((j, index) => {
           return <div key={index}>
               { j.sender===user.username ? <div className='eachChatright'>
                   <b>{j.text}</b>
                   <i>sender: {j.sender}</i>
                </div> : 
                <div className='eachChatleft'>
                <b>{j.text}</b>
                <i>sender: {j.sender}</i>
             </div>}
           </div>
        })

    }
    </Reactscroll>
}    

    <div className='buttombar'>
        {saveMsgError}
    <input id="inputID" type="text" ref={msgRef}></input><button onClick={sendHandler} className='btn btn-primary'>Send</button>
    </div>

</div>
    )
}

export default ChatArea;