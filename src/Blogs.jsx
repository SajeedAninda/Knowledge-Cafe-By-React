import { useEffect, useState } from "react"
import Blog from "./Blog";

export default function Blogs() {
    let [blogs, setBlogs] = useState([]);
    useEffect(() => {
        let url = "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            {blogs.map(blogs => <Blog blogs={blogs}></Blog>)}
        </div>
    )
}