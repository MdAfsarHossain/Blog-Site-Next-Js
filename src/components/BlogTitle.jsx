'use client'
import Link from "next/link"

const BlogTitle = ({ blog }) => {
    return (
        <div className="border-2 border-green-400/50 p-5 rounded-md flex flex-col gap-5 justify-between shadow-md hover:-translate-y-1 transition-all">
            <h1><span className="font-bold text-lg">Blog Title:</span><br />
                <Link
                    href={`/blog/${blog.id}`}
                ><p 
                className="hover:text-green-500 text-xl">{blog.title}</p></Link></h1>

            <div className="">
                <Link
                    href={`/blog/${blog.id}`}
                >
                    <button
                        className="bg-green-500 text-white font-bold px-3 py-1 rounded-md border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all"
                    >View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default BlogTitle
