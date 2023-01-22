import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {Message} from "../../types";

export const fetchMessages = createAsyncThunk<Message[]>(
    'messages/fetchAll',
    async () => {
        const responseMessages = await axiosApi.get<Message[]>('/messages');
        return responseMessages.data;
    }
)