import Bookmark from "./Bookmark";

export default function Bookmarks({ bookmarks }) {
    return (
        <div className="w-1/3 my-8 bg-slate-200 rounded-xl p-6">
            <div className="text-center">
                <h1 className="text-xl font-bold">Bookmarked Blogs : {bookmarks.length} </h1>
            </div>
            <div>
                {bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)}
            </div>
        </div>
    )
}