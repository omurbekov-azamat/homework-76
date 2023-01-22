import React from 'react';
import MessageItems from "../features/messages/components/MessageItems";

const Chat = () => {
    return (
        <div
            style={{width: '800px', margin: '0 auto', border: '2px solid red', background: 'lightcoral'}}
        >
            <MessageItems/>
        </div>
    );
};

export default Chat;