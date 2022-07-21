import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createChatAction } from '../actions/Chat'

const CreateChatModal = ( ) => {
  
const dispatch = useDispatch()
    const chatnameRef = useRef()
    const chatmembers = useRef()

const createChatHandler = () => {
  dispatch(createChatAction(chatnameRef.current.value, chatmembers.current.value))
  
}
    

    return (
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Chat</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
 
<form>
    <input ref={chatnameRef} type="text" class="my-1 form-control" id="chatname" placeholder="chat name?" />
    <label>Enter emails(including yours) with coma separated</label>
    <input ref={chatmembers} placeholder='members emails' type="text" class="my-1 form-control" id="chatmembers" ></input>
</form>


      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={createChatHandler}>Create Chat</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default CreateChatModal;