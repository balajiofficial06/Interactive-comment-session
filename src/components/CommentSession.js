import React, { useEffect, useState } from 'react'
import Comments from './Comments'
import TypeBox from './TypeBox'
import '../styles/CommentSession.css'
import data from '../data.json'

function CommentSession() {



    return (
        <div className='commentsession'>
            {console.log(data)}
            <Comments data={data.comments} />
            <TypeBox avt={data.currentUser.image.png} />
        </div>
    )
}

export default CommentSession 