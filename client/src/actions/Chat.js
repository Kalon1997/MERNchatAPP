import axios from "axios";

export const createChatAction = (chatName, memberlist) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "CreateChatRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "http://localhost:5000/api/v1/createchat",
            { chatName, memberlist },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"CreateChatSuccess",
            payload: data.newChat
          })

    } catch (error) {
      dispatch({
        type: "CreateChatFailure",
        payload: error.response.data.message
      })
    }
}


export const getAllChatsAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "AllChatRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.get(
          "http://localhost:5000/api/v1/allChats",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"AllChatSuccess",
          payload: data.allChats
        })

  } catch (error) {
    dispatch({
      type: "AllChatFailure",
      payload: error.response.data.message
    })
  }
}


export const selectOpenedChatAction = (curchat) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "OpenedChatRequest"
      })
  
        dispatch({
          type:"OpenedChatSuccess",
          payload: curchat
        })

  } catch (error) {
    dispatch({
      type: "OpenedChatFailure",
      payload: error.response.data.message
    })
  }
}

export const saveMessageAction = (mArry) => async (dispatch) => {
try {

  dispatch({
    type: "SAVEMSGinSTATE",
    payload: mArry
  })
} catch (error) {
  dispatch({
    type: "SAVEMSGinSTATEError",
    payload: "error in sending"
  })
}
  
}

export const saveMsginDB = (id, text, sender) => async (dispatch) => {
try {
    axios.defaults.withCredentials = true
  await axios.patch(
      "http://localhost:5000/api/v1/saveMsg",
      {chatGroupId: id, text: text, sender: sender},
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
} catch (error) {
  dispatch({
    type: "SAVEMSGinSTATEError",
    payload: "Failed to save/send msg"
  })
}
}



export const storeSocketAction = (socket) => (dispatch) => {
  try {
    dispatch({
      type: "STORESOCKETS",
      payload: socket
    })
  } catch (error) {
    dispatch({
      type: "STORESOCKETE",
      payload: "Failed to store socket "
    })
  }
  }
