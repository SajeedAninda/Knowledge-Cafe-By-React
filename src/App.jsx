import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './blogs'
import Bookmarks from './Bookmarks'

function App() {
  let [bookmarks, setBookmarks] = useState([]);
  let handleBookmark = (title) => {
      let newBookmarks=[...bookmarks,title];
      setBookmarks(newBookmarks);
  }
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Header></Header>
        <div className='flex flex-row gap-6'>
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
