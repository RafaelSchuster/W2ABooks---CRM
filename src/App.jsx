import './App.css';
import { MainContext } from './Context/Context';
import Main from './Components/Main';
import { useEffect, useState } from 'react';

const mockBooks = [
  {
    name: 'Book 1',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutAuthor:'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
    summaryTitle: 'A journey about growth and challenge',
    summary: 'Book about something 1',
    proofReaderGrade: '7',
    stagesDone: 'proofReader, copyEditor',
    processStatus: 'Waiting for line editor',
    datePresenting: '01/01/2021',
    dateResponse: '05/01/2021',
    responseStatus: 'done',
    meetingDate: '10/01/2021',
    summaryMeeting: 'positive, agent interested',
    genre: ['Classic', 'Fantasy', 'Comedy'],
    wordCount : '188 words',
    progress : '90'
  },
  {
    name: 'Book 2',
    author: 'Author 2',
    authorEmail: 'test2@test.com',
    aboutAuthor:'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
    summaryTitle: 'A journey about growth and challenge',
    summary: 'Book about something 2',
    proofReaderGrade: '7',
    stagesDone: 'proofReader, copyEditor',
    processStatus: 'Waiting for line editor',
    datePresenting: '01/01/2021',
    dateResponse: '05/01/2021',
    responseStatus: 'done',
    meetingDate: '10/01/2021',
    summaryMeeting: 'positive, agent interested',
    genre: ['Classic', 'Fantasy', 'Drama'],
    wordCount : '398 words',
    progress : '50'

  }, {
    name: 'Book 3',
    author: 'Author 3',
    authorEmail: 'test3@test.com',
    aboutAuthor:'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
    summaryTitle: 'A journey about growth and challenge',
    summary: 'Book about something 3',
    proofReaderGrade: '7',
    stagesDone: 'proofReader, copyEditor',
    processStatus: 'Waiting for line editor',
    datePresenting: '01/01/2021',
    dateResponse: '05/01/2021',
    responseStatus: 'done',
    meetingDate: '10/01/2021',
    summaryMeeting: 'positive, agent interested',
    genre: ['Classic', 'Monologue'],
    wordCount : '688 words',
    progress : '60'

  }, {
    name: 'Book 4',
    author: 'Author 4',
    authorEmail: 'test4@test.com',
    aboutAuthor:'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
    summaryTitle: 'A journey about growth and challenge',
    summary: 'Book about something 4',
    proofReaderGrade: '7',
    stagesDone: 'proofReader, copyEditor',
    processStatus: 'Waiting for line editor',
    datePresenting: '01/01/2021',
    dateResponse: '05/01/2021',
    responseStatus: 'done',
    meetingDate: '10/01/2021',
    summaryMeeting: 'positive, agent interested',
    genre: ['Satire', 'Western'],
    wordCount : '48 words',
    progress : '20'
  }
];

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(mockBooks);
  }, [])

  return (
    <>
      < MainContext.Provider value={{ books }}>
        <Main />
      </MainContext.Provider >
    </>
  )
}

export default App;
