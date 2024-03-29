import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import dayjs from "dayjs";
import {Message} from "../../../types";

interface Props {
    message: Message;
}

const MessageItem: React.FC<Props> = ({message}) => {
    return (
        <Grid item>
            <Card sx={{width: 300}}>
                <CardContent>
                    <Grid container direction='column'>
                        <Grid item xs>
                            <Typography
                                variant='caption'
                                sx={{fontWeight: 'bold'}}
                                color="red"
                            >
                                Author: {message.author}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='caption' color="blue">
                                Datetime: {dayjs(message.datetime).format('DD.MM.YYYY HH:mm:ss')}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='caption' color='black'>
                                Message: {message.message}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
};

export default MessageItem;