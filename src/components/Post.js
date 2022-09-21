import React from 'react'
const Post = (props) => {
    return (
        <div className="post">
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
        </div>
    )
}

export { Post }