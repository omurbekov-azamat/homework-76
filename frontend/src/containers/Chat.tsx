import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchMessages} from "../features/messages/messagesThunks";
import {selectLastDateTime, selectMessages, selectMessagesLoading} from "../features/messages/messagesSlice";
import {container} from "../components/UI/AppToolbar/AppToolbar";
import MessageItems from "../features/messages/components/MessageItems";
import MessageForm from "../features/messages/components/MessageForm";
import Spinner from "../components/UI/Spinner/Spinner";

const Chat = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectMessagesLoading);
    const messages = useAppSelector(selectMessages);
    const date = useAppSelector(selectLastDateTime);

    useEffect(() => {
        dispatch(fetchMessages(''));
    }, [dispatch]);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (date) {
                await dispatch(fetchMessages(date));
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [dispatch, date]);

    const getClearMessages = useMemo(() => {
        return <MessageItems messages={messages}/>
    }, [messages]);

    return (
        <div style={container}>
            <div style={{border: '2px solid red'}}>
                <div style={{height: '500px', padding: '50px', overflow: 'auto'}}>
                    {loading && <Spinner/>}
                    {getClearMessages}
                </div>
                <MessageForm/>
            </div>
        </div>
    );
};

export default Chat;