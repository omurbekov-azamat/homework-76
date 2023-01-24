import React, {useState} from 'react';
import {createMessage} from "../messagesThunks";
import {selectSendMessageLoading} from "../messagesSlice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {Box, Grid, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {ArrowCircleUpSharp} from "@mui/icons-material";
import {MessageMutation} from "../../../types";

const MessageForm = () => {
    const dispatch = useAppDispatch();
    const sendLoading = useAppSelector(selectSendMessageLoading);
    const [message, setMessage] = useState<MessageMutation>({
        author: '',
        message: '',
    });

    const inputChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setMessage(prev => ({...prev, [name]: value}));
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(createMessage(message));
        setMessage({
            author: '',
            message: '',
        });
    };

    return (
        <Box sx={{p: 3}}>
            <form onSubmit={submitForm}>
                <Grid container direction='row' spacing={2}>
                    <Grid item xs>
                        <TextField
                            id='author'
                            label='author'
                            name='author'
                            onChange={inputChangeMessage}
                            value={message.author}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id='message'
                            label='message'
                            name='message'
                            onChange={inputChangeMessage}
                            value={message.message}
                        />
                    </Grid>
                    <Grid item xs>
                        <LoadingButton
                            type='submit'
                            color='secondary'
                            loading={sendLoading}
                            loadingPosition='start'
                            variant='contained'
                            startIcon={<ArrowCircleUpSharp/>}
                        >
                            Send
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default MessageForm;