import axios from "axios";

// const server_url = "http://localhost:5000/api/v1/"

export const registerAction = (username, email, password) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "RegisterRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            `/register`,
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"RegisterSuccess",
            payload: data.user
          })
          window.location.assign('/')
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message
      })
    }
}



export const loginAction = (email, password) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoginRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
        `/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoginSuccess",
          payload: data.user,
          payloadUsername: data.user.username,
        })
        window.location.assign('/')
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message
    })
  }
}
export const loadUserAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoadUserRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.get(
      `/myProfile`,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoadUserSuccess",
          payload: data.user
        })
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message
    })
  }
}

export const logoutAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LogoutRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      await axios.get(
        `/logout`,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LogoutSuccess",
        })
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message
    })
  }
}
