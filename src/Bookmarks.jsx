import Bookmark from "./Bookmark";

export default function Bookmarks({ bookmarks, readTime }) {
    return (
        <div className="w-1/3 my-8 bg-slate-200 rounded-xl p-6">
            <div className="text-center">
                <div className="w-full bg-purple-400 p-4 rounded-xl text-lg mb-3">
                    <h2>Spent time on read : {readTime} min</h2>
                </div>
                <h1 className="text-xl font-bold">Bookmarked Blogs : {bookmarks.length} </h1>
            </div>
            <div>
                {bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)}
            </div>
        </div>
    )
}