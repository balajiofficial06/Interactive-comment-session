import React from 'react'
import Comments from './Comments'
import TypeBox from './TypeBox'
import '../styles/CommentSession.css'

function CommentSession() {
    return (
        <div className='commentsession'>
            <Comments />
            <TypeBox />
        </div>
    )
}

export default CommentSession 