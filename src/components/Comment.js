import React, { useState, useEffect } from "react";
import Comments from "../FakeApis/CommentData";
import { FaComment } from "react-icons/fa";
import CurrentUser from "../FakeApis/CurrentUserData";

const Comment = () => {
  const [comments, setComments] = useState(Comments);
  const [newComment, setNewComment] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  // تشغيل التأثير التدريجي عند تحديث التعليقات
  useEffect(() => {
    setFadeIn(true);
  }, [comments]);

  return (
    <div className="mt-4 border-t pt-3 bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300">
      {/* إدخال تعليق جديد */}
      <div className="flex items-center gap-2 p-3 bg-white border rounded-lg shadow-sm">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="Write a comment..."
          className="flex-1 px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={() => {
            if (newComment.trim()) {
              const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
              setComments([
                ...comments,
                { id: newId, CommeText: newComment, commentProfile: CurrentUser[0].ProfileImage },
              ]);
              setNewComment("");
            }
          }}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
        >
          <FaComment className="text-lg" />
          <span>Add Comment</span>
        </button>
      </div>

      {/* عرض التعليقات بتأثير تدريجي */}
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={comment.id}
              className={`flex items-start space-x-3 p-3 bg-white border rounded-lg shadow-sm transition-all duration-500 ease-out transform ${
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* صورة الملف الشخصي */}
              <img
                alt="comment profile"
                src={comment.commentProfile}
                className="w-10 h-10 rounded-full border border-gray-300"
              />

              {/* نص التعليق */}
              <div className="flex-1">
                <p className="text-gray-700">{comment.CommeText}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-2">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
