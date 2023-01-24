import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {createMessage, fetchMessages} from "./messagesThunks";
import {Message} from "../../types";

interface MessagesState {
    items: Message[];
    lastDateTime: string;
    fetchLoading: boolean;
    sendMessage: boolean;
}

const initialState: MessagesState = {
    items: [],
    lastDateTime: '',
    fetchLoading: false,
    sendMessage: false,
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
            state.fetchLoading = false;
            state.items = state.items.concat(messages.items)
            state.lastDateTime = messages.lastDate;
        });
        builder.addCase(fetchMessages.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(createMessage.pending, (state) => {
            state.sendMessage = true;
        });
        builder.addCase(createMessage.fulfilled, (state) => {
            state.sendMessage = false;
        });
        builder.addCase(createMessage.rejected, (state) => {
            state.sendMessage = false;
        });
    },
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.items;
export const selectLastDateTime = (state: RootState) => state.messages.lastDateTime;
export const selectMessagesLoading = (state: RootState) => state.messages.fetchLoading;
export const selectSendMessageLoading = (state: RootState) => state.messages.sendMessage;