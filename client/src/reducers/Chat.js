import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    chatList: []
}

export const chatReducer =createReducer(initialState, {

    SAVEMSGinSTATE : (state, action) => {
        state.saveMsgError = ""
        state.openedChat.messages = action.payload
    },

    SAVEMSGinSTATEError : (state, action) => {
        state.saveMsgError = action.payload
    },

    CreateChatRequest : (state) => {
        state.loading = true;
        state.rerror = null;
        state.rerror = "";
    },
    CreateChatSuccess : (state,action) => {
        state.loading=false; 
        state.chat=action.payload
    },
    CreateChatFailure : (state,action) => {
        state.loading=false; 
        state.rerror = null;
        state.rerror=action.payload;
    },
    
    AllChatRequest : (state) => {
        state.loading = true;
        state.rerror = null;
        state.rerror = "";
    },
    AllChatSuccess : (state,action) => {
        state.loading=false; 
        state.chatList=action.payload
    },
    AllChatFailure : (state,action) => {
        state.loading=false; 
        state.rerror = null;
        state.rerror=action.payload;
    },


    OpenedChatRequest : (state) => {
        state.loading = true;
        state.rerror = null;
        state.rerror = "";
    },
    OpenedChatSuccess : (state,action) => {
        state.loading=false; 
        state.openedChat=action.payload
    },
    OpenedChatFailure : (state,action) => {
        state.loading=false; 
        state.rerror = null;
        state.rerror=action.payload;
    },
    
});