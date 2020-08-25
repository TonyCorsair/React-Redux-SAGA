import React from "react";
import { useSelector } from 'react-redux'
import Post from "./Post";

const Posts = () => {

    const syncPosts = useSelector(state => state.posts.posts)
    if(!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}


// const mapStateToProps = state => {
//
//     return {
//         syncPosts: state.posts.posts
//     }
// }

export default Posts