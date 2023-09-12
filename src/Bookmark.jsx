export default function Bookmark({ bookmark }) {
    let {title}=bookmark;
    return (
        <div className="p-6 bg-slate-50 my-3 rounded-xl">
            <h1 className="text-lg font-bold">{title}</h1>
        </div>
    )
}