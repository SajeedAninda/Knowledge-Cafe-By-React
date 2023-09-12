import { useEffect, useState } from "react"
import Blog from "./Blog";

export default function Blogs({ handleBookmark, handleReadTime }) {
    let [blogs, setBlogs] = useState([]);
    useEffect(() => {
        let url = "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="my-8 w-2/3">
            {blogs.map((blogs, idx) => <Blog key={idx} handleBookmark={handleBookmark} handleReadTime={handleReadTime} blogs={blogs}></Blog>)}
        </div>
    )
}