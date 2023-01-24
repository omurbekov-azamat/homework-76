import React from 'react';
import {Grid} from "@mui/material";
import MessageItem from "./MessageItem";
import {Message} from "../../../types";

interface Props {
    messages: Message[]
}

const MessageItems: React.FC<Props> = ({messages}) => {
    return (
        <Grid container direction='column' spacing={2}>
            {messages.map((message) => (
                <MessageItem key={message.id} message={message}/>
            ))}
        </Grid>
    );
};

export default MessageItems;