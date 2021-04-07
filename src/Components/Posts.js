import React from 'react';
import Post from './Post';
import '../Styles/Posts.css'

const Posts = () => {
    return (
        <section id="Posts">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default Posts;