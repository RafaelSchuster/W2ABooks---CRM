import React from 'react';
import '../Styles/MessageItem.css';

function MessageItem(props) {
    return (
        <div
            className='msgItem'>
            {props.username && <span className='userName'>{props.username}</span>}
            {props.date && <span className='msgDate'>{props.date}</span>}
            {props.text && <span className='msgTxt'>{props.text}</span>}
        </div>
    )
}

export default MessageItem;