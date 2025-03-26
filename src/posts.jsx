import { use } from "react"
import Post from "./post"

export default function Posts({ postsPromise }) {
    const posts =use(postsPromise)
    
    return (
        <div className="card">
            <h1>All Posts are here..{posts.length}</h1>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
       
    )
}   