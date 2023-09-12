import { FaBookmark } from 'react-icons/fa';
export default function Blog({ blogs }) {
    let { cover, author_img, author, posted_date, reading_time, title, hashtags } = blogs;
    return (
        <div className='space-y-4 mb-8'>
            <img className="w-full" src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className="author gap-3 flex" >
                    <img className="w-12" src={author_img} alt="" />
                    <div>
                        <h3 className="text-gray-600">{author}</h3>
                        <h4 className="text-sm text-gray-600">{posted_date}</h4>
                    </div>
                </div>
                <div className="read-time flex items-center">
                    <h3>{reading_time} min read</h3>
                    <button className='ml-2 text-2xl text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            {hashtags.map(hash=><span className='mr-2 text-sm text-gray-500'>#{hash}</span>)}
            <button className='text-sm text-purple-900 block'>Mark as Read</button>
        </div>
    )
}