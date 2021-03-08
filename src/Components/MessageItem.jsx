import React from 'react';
import '../Styles/MessageItem.css';

function MessageItem(props) {
    return (
        <div
            className='msgItem'>
            <span
                className='userName'>
                {props.username}
            </span>
            <span
                className='msgDate'>
                {props.date}
            </span>
            <span
                className='msgTxt'>
                {props.text}
            </span>
        </div>
    )
}

export default MessageItem;