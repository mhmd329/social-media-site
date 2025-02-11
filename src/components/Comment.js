import React, { useState } from 'react'
import Comments from '../FakeApis/CommentData'
 const Comment = ({postId}) => {
    const [comments,setComments] = useState(Comments)
  return (
    <div className="mt-4 border-t pt-3">
    <h3 className="text-md font-semibold text-gray-700">Comments for Post {postId}</h3>
    <div className="mt-2 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="flex  items-start space-x-4">
          {/* Comment Profile Image */}
          <img
            alt="comment profile"
            src={comment.commentProfile}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          
          {/* Comment Text */}
          <div>
            <p className="text-gray-600 mt-1">{comment.CommeText}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Comment