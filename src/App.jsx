import './Styles/Main.css';
import { MainContext } from './Context/Context';
import Main from './Components/Main';
import { useEffect, useState } from 'react';

const mockWorkingOnBooks = [
  {
    bookName: 'Game Of Thrones',
    addedOn: 'January 14, 2019',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
    aboutAuthor: 'Hello, My name is Bob Dash Hifen. Who? You might ask.. Nevertheless, you will hear a lot about me. Oh you can doubt it, it wont matter when my time to shine will come they will ask Shakespeare who?, yes yes my friend.',
    summary: 'Book about something 1',
    proofReaderGrade: '7',
    stagesDone: 'proofReader, copyEditor',
    processStatus: 'Waiting for line editor',
    datePresenting: '01/01/2021',
    dateResponse: '05/01/2021',
    responseStatus: 'done',
    meetingDate: '10/01/2021',
    summaryMeeting: 'positive, agent interested',
    genre: ['Classic', 'Fantasy', 'Comedy', 'Action', 'Western', 'Drama', 'Horror', 'sdsdsds', 'tytytyt', 'ytyggrgr'],
    wordCount: '188 words',
    progress: '10'
  },
  {
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
    aboutAuthor: 'Hello, My name is Bob Dash Hifen. Who? You might ask.. Nevertheless, you will hear a lot about me, I am the next Shakespeare. Oh you can doubt it, it wont matter when my time to shine will come and my destiny materialize they will ask Shakespeare who?, yes yes my friend. ',
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
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
    genre: ['Classic', 'Fantasy', 'Drama', 'sdsdsdsdsd', 'sdsdsdsdsdsd'],
    wordCount: '398 words',
    progress: '50'

  }, {
    bookName: 'Book 3',
    addedOn: 'March, 16, 2020',
    author: 'Author 3',
    authorEmail: 'test3@test.com',
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
  }
];
const mockRecommendedBooks = [{
  bookName: 'Book 5',
  addedOn: 'March, 16, 2020',
  author: 'Author 1',
  authorEmail: 'test1@test.com',
  aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
  progress: '90',
  recommendationDate: 'August, 19, 2020'

}, {
  bookName: 'Book 6',
  addedOn: 'March, 16, 2020',
  author: 'Author 1',
  authorEmail: 'test1@test.com',
  aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
  progress: '90',
  recommendationDate: 'April, 29, 2020'
}]
const mockStarredBooks = [,
  {
    bookName: 'Book 1',
    addedOn: 'March, 16, 2020',
    author: 'Author 1',
    authorEmail: 'test1@test.com',
    aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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
  }]

const mockDeletedBooks = [{
  bookName: 'Book 3',
  addedOn: 'March, 16, 2020',
  author: 'Author 3',
  authorEmail: 'test3@test.com',
  aboutBook: "AAA  A Song of Ice and Fire takes place in a fictional world in which seasons last for years and end unpredictably. Nearly three centuries before the events of the first novel,the Seven Kingdoms of Westeros were united under the Targaryen dynasty by Aegon I and his sister wives Visenya and Rhaenys, establishing military supremacy through their control of dragons. Aegon became the first king of the entire continent of Westeros, save for the southerly region of Dorne. The Targaryen dynasty ruled for three hundred years, although civil war and infighting between the Targaryens resulted in the death of all their dragons. At the beginning of A Game of Thrones',",
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

}]
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

const mockMonthsToRecommend = [
  { value: 'january', label: 'January' },
  { value: 'february', label: 'February' }]

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
}, {
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'Waiting to meet you!!'
}, {
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'Waiting to meet you!!'
}, {
  date: new Date().toISOString(),
  userName: 'Rafael Schuster',
  content: 'Waiting to meet you!!'
}]


function App() {
  const [workingBooks, setWorkingBooks] = useState(mockWorkingOnBooks);
  const [recommendedBooks, setRecommendedBooks] = useState(mockRecommendedBooks);
  const [starredBooks, setStarredBooks] = useState(mockStarredBooks);
  const [deletedBooks, setDeletedBooks] = useState(mockDeletedBooks);
  const [thisUser, setThisUser] = useState({});
  const [gridView, setGridView] = useState(true);
  const [nationality, setNationality] = useState('');
  const [contacts, setContacts] = useState(mockContacts);
  const [monthsToRecommend, setMonthsToRecommend] = useState(mockMonthsToRecommend)
  const [msgs, setMsgs] = useState(mockMsgs);

  useEffect(() => {
    setWorkingBooks(mockWorkingOnBooks);
    setRecommendedBooks(mockRecommendedBooks);
    setStarredBooks(mockStarredBooks);
    setDeletedBooks(mockDeletedBooks);
    setThisUser(thisMockUser);
  }, [])

  return (
    <>
      < MainContext.Provider value={{ workingBooks, recommendedBooks, starredBooks, deletedBooks, thisUser, gridView, setGridView, nationality, setNationality, contacts, setContacts, monthsToRecommend, setMonthsToRecommend, msgs }}>
        <Main />
      </MainContext.Provider >
    </>
  )
}

export default App;
