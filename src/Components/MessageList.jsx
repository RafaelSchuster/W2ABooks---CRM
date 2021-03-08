import React, { useEffect, useState, useContext } from 'react';
import { MsgContext } from '../Context/Context';
import MessageItem from './MessageItem';
import '../Styles/MessageItem.css';

function MessageList() {
    const { msgs } = useContext(MsgContext);
    return (
        <ul className="message-list">
            {msgs && msgs.map(msg =>
                <MessageItem
                    key={Math.random()}
                    username={msg.userName}
                    text={msg.content}
                    date={msg.date}
                />
            )}
        </ul>
    )
}

export default MessageList;
