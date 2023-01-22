import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {selectMessages} from "../messagesSlice";
import {fetchMessages} from "../messagesThunks";
import {Grid} from "@mui/material";
import MessageItem from "./MessageItem";

const MessageItems = () => {
    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch])

    return (
        <Grid container direction='column' spacing={2}>
            {messages.map((message) => (
                <MessageItem key={message.id} message={message}/>
            ))}
        </Grid>
    );
};

export default MessageItems;