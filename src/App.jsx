import './Styles/Main.css';
import { MainContext } from './Context/Context';
import Main from './Components/Main';
import { useEffect, useState } from 'react';

const mockBooks = [
  {
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '188 words',
    progress: '90'
  },
  {
    bookName: 'Book 2',
    addedOn: 'March, 16, 2020',
    author: 'Author 2',
    authorEmail: 'test2@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '398 words',
    progress: '50'

  }, {
    bookName: 'Book 3',
    addedOn: 'March, 16, 2020',
    author: 'Author 3',
    authorEmail: 'test3@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '688 words',
    progress: '60'

  }, {
    bookName: 'Book 4',
    addedOn: 'March, 16, 2020',
    author: 'Author 4',
    authorEmail: 'test4@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '48 words',
    progress: '0'
  },
  {
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '188 words',
    progress: '90'
  },{
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '188 words',
    progress: '90'
  },
  {
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutAuthor: 'Hello, My name is Inigo Montoya. You killed my father. Prepare to die.',
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
    wordCount: '188 words',
    progress: '90'
  },
];
const thisMockUser = {
  firstName: 'Rafael',
  lastName: 'Schuster',
  telephone: '+12345567',
  email: 'rafael@schuster.com',
  genres: 'Classic, Drama, Satire'
};

const mockContacts = [{
  id: 1,
  firstName: 'Bill',
  lastName: 'Hill',
  telephone: '01234',
  email: 'b@h.com',
  company: 'Apple',
  jobTitle: 'FE Developer',
  personalBio: 'Great guy, promised me a job interview! 0',
  workHistoryDescription: "Worked together in Oracle"
},
{
  id: 2,
  firstName: 'Mill',
  lastName: 'Till',
  telephone: '01234',
  email: 'bjj@htt.com',
  company: 'Microsoft',
  jobTitle: 'BE Developer',
  personalBio: 'Great guy, promised me a job interview! 1 ',
  workHistoryDescription: "Worked together on FS Project"
}, {
  id: 3,
  firstName: 'Will',
  lastName: 'Sill',
  telephone: '01234',
  email: 'baa@hbb.com',
  company: 'Oracle',
  jobTitle: 'FS Developer',
  personalBio: 'Great guy, promised me a job interview! 11'
}, {
  id: 4,
  firstName: 'Till',
  lastName: 'Vill',
  telephone: '01234',
  email: 'baa@hbb.com',
  company: 'Oracle',
  jobTitle: 'CTO',
  personalBio: 'Great guy, promised me a job interview! 22 ',
  workHistoryDescription: "Worked together on Apple"
}, {
  id: 5,
  firstName: 'Lill',
  lastName: 'Jill',
  telephone: '01234',
  email: 'baa@hbb.com',
  company: 'Oracle',
  jobTitle: 'CEO',
  personalBio: 'Great guy, promised me a job interview! 33 '
}, {
  id: 6,
  firstName: 'Nill',
  lastName: 'Gill',
  telephone: '01234',
  email: 'baa@hbb.com',
  company: 'Oracle',
  jobTitle: 'dev',
  personalBio: 'Great guy, promised me a job interview! 44 '
}, {
  id: 7,
  firstName: 'Phill',
  lastName: 'Pill',
  telephone: '01234',
  email: 'baa@hbb.com',
  company: 'Oracle',
  jobTitle: 'dev',
  personalBio: 'Great guy, promised me a job interview! 55 ',
  workHistoryDescription: "Worked together on Microsoft"
}]

function App() {
  const [books, setBooks] = useState([]);
  const [thisUser, setThisUser] = useState({});
  const [gridView, setGridView] = useState(true);
  const [nationality, setNationality] = useState('');
  const [bookmarks, setBookmarks] = useState(mockBooks);
  const [contacts, setContacts] = useState(mockContacts);

  useEffect(() => {
    setBooks(mockBooks);
    setThisUser(thisMockUser);
    setBookmarks(mockBooks);

  }, [])

  return (
    <>
      < MainContext.Provider value={{ books, thisUser, gridView, setGridView, nationality, setNationality, bookmarks, setBookmarks, contacts, setContacts }}>
        <Main />
      </MainContext.Provider >
    </>
  )
}

export default App;
