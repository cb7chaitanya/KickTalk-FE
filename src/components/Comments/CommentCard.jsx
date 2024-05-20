import React from 'react'

function CommentCard({content, upvoteCount, downvoteCount}) {
  return (
    <div className='border rounded mt-4 mx-2 h-20'>
        <div>
            Content: {content}
        </div>
        <div>
            <div>Upvotes: {upvoteCount}</div>
            <div>Downvotes: {downvoteCount}</div>
        </div>
    </div>
  )
}

export default CommentCard