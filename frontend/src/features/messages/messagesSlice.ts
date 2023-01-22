import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchMessages} from "./messagesThunks";
import {Message} from "../../types";

interface MessagesState {
    items: Message[];
    fetchLoading: boolean;
}

const initialState: MessagesState = {
    items: [],
    fetchLoading: false,
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMessages.fulfilled, (state,{payload: messages}) => {
            state.fetchLoading = false;
            state.items = messages;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
            state.fetchLoading = false;
        });
    },
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.items;
export const selectMessagesLoading = (state: RootState) => state.messages.fetchLoading;