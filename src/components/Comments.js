import React from 'react'


function CommentsTree({ data }) {
    return (
        <div className='level' style={{ marginLeft: "20px" }}>
            {data.map((obj, index) => <div>
                <p>{obj.content}</p>
                {obj.replies && <CommentsTree data={obj.replies} />}
            </div>)}
        </div>
    )
}

function Comments({ data }) {
    return (
        <div className='comments'>
            <CommentsTree data={data} />

        </div >
    )
}

export default Comments