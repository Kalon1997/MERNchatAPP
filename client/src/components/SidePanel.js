import React, {useEffect}  from 'react'
import CreateChatModal from './CreateChatModal';
import './SidePanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllChatsAction, selectOpenedChatAction } from '../actions/Chat';
const SidePanel = ( ) => {

    const cList = useSelector((state) => (state.myweb2.chatList))
const dispatch = useDispatch();
const groupcreateerr = useSelector((state) => {
    if(!state.myweb2.ccerror)
      return ""
    else
        return state.myweb2.ccerror
  })
useEffect((e) => {
    dispatch(getAllChatsAction());
}, [dispatch])


    return (
        <div className='sidepanel'>
<div>
<nav>
    {
       cList?.map((i, index) => (
           <button className='my-1 w-100 btn btn-light' onClick={(e) =>
            { 
                 dispatch(selectOpenedChatAction({
            messages: i.messages,
            _id: i._id,
            chatName: i.chatName,
            members: i.members,
            chatCreator: i.chatCreator,
           }));
        }} key={index}>{i.chatName}</button>
       )) 
    }
</nav>

</div>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Create New Chat
<b className='text-danger'>{groupcreateerr}</b>
</button>

<CreateChatModal />

        </div>
    )
}

export default SidePanel;