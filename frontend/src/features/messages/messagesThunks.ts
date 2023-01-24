import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Message, MessageMutation} from "../../types";


interface PropsMutations {
    items: Message[],
    lastDate: string;
}

export const fetchMessages = createAsyncThunk<PropsMutations, string>(
    'messages/fetchAll',
    async (date) => {
        const responseMessages = await axiosApi.get<Message[]>('/messages?datetime=' + date);
        const messages = responseMessages.data;
        const lastDate = messages[messages.length -1].datetime;
        return {
            items: messages,
            lastDate,
        }
    }
);

export const createMessage = createAsyncThunk<void, MessageMutation>(
    'message/createMessage',
    async (message) => {
        await axiosApi.post('/messages', message);
    }
);