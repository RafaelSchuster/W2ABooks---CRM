import React, { useEffect, useState } from 'react';
// import { getMsg } from '../Api/MessageApi';
import { MsgContext } from '../Context/Context';
import MessageForm from './MessageForm';
// import { getMsg } from './lib/api';
// import MsgForm from './MessageForm';
import MessageList from './MessageList';

// let msgResponse;
// let arrItems = [];
// let msgObj = {}
// let listObj = {};


const mockMsgs = [{
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'I love your book, give me a call',
}, {
  date: new Date().toISOString(),
  userName: 'Writer1',
  content: 'Right away!'
}, {
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'Fantastic!'
}, {
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'Waiting to meet you!!'
}]

function MessageComponent() {
  const [msgs, setMsgs] = useState();
  const [msg, setMsg] = useState();
  const [length, setLength] = useState();
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState();
  const [image, setImage] = useState();

  // async function fetchMsg() {
  //   const response = await getMsg();
  //   msgResponse = response.data;
  // }

  // useEffect(() => {
  //   msgObj = {};
  //   arrItems = [];
  //   setLoading(true);
  //   setInterval(() => {
  //     fetchMsg().then(() => {
  //       msgResponse.msgs.forEach(item => {
  //         if (!(item.id in msgObj)) {
  //           msgObj[item.id] = item;
  //         };
  //       })
  //     });
  //   }, 1000)
  //   setInterval(() => {
  //     // getServer();
  //   }, 1000)
  // }, [])


  // const getServer = () => {
  //   ref.onSnapshot(messages => {
  //     messages.forEach(item => {
  //       if (!(item.data().id in listObj) && item.data().id) {
  //         listObj[item.data().id] = item.data()
  //         arrItems = Object.entries(listObj).map(e => (e[1]));
  //         arrItems.sort((a, b) => {
  //           return new Date(b.date) - new Date(a.date)
  //         })
  //         setMsgs(arrItems);
  //       }
  //     });
  //   });
  //   setLoading(false);
  // }

  useEffect(() => {
    setMsgs(mockMsgs)
  }, [])

  return (
    <MsgContext.Provider value={{
      msgs, setMsgs,
      msg, setMsg,
      length, setLength,
      userId, setUserId,
      loading, setLoading,
      image, setImage
    }}>
      <div className="messaging-main-div" >
        <MessageForm />
        <MessageList />
      </div>
    </MsgContext.Provider>

  )
}
export default MessageComponent;