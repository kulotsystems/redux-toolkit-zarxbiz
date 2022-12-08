import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPosts, removePosts } from './postSlice.js'

export function Post() {
    const post = useSelector((state) => state.post.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <ol>
                    {post.map((p) => (
                        <li>{p.title}</li>
                    ))}
                </ol>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(removePosts())}
                    style={{marginRight: '8px'}}
                >
                    Remove Posts
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(addPosts())}
                    style={{marginLeft: '8px'}}
                >
                    Add Posts
                </button>
            </div>
        </div>
    )
}
