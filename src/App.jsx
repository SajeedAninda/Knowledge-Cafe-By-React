import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './blogs'
import Bookmarks from './Bookmarks'

function App() {
  let [bookmarks, setBookmarks] = useState([]);
  let [readTime, setReadTime] = useState(0);

  let handleBookmark = (title) => {
    let newBookmarks = [...bookmarks, title];
    setBookmarks(newBookmarks);
  }

  let handleReadTime = (reading_time, id) => {
    let newReadTime = readTime + reading_time;
    setReadTime(newReadTime);

    let remainingBookmark = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remainingBookmark);
  }
  return (
    <>
      <div className='w-[80%] mx-auto'>
        <Header></Header>
        <div className='flex flex-row gap-6'>
          <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
