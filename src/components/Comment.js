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
    <div className="mt-4 border-t pt-3 bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 max-w-2xl mx-auto">
      {/* إدخال تعليق جديد */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white border rounded-lg shadow-sm">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          placeholder="Write a comment..."
          className="flex-1 min-w-0 px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
        />
        <button
          onClick={() => {
            if (newComment.trim()) {
              const newId =
                comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
              setComments([
                ...comments,
                {
                  id: newId,
                  CommeText: newComment,
                  commentProfile: CurrentUser[0].ProfileImage,
                },
              ]);
              setNewComment("");
            }
          }}
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition w-full sm:w-auto"
        >
          <div className="flex items-center justify-center gap-2">
            <FaComment className="text-lg" />
            <span>Add Comment</span>
          </div>
        </button>
      </div>

      {/* عرض التعليقات بتأثير تدريجي */}
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={comment.id}
              className={`flex  space-x-2 sm:space-x-3 p-3 bg-white border rounded-lg shadow-sm transition-all duration-500 ease-out transform ${
                fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* صورة الملف الشخصي */}
              <img
                alt="comment profile"
                src={comment.commentProfile}
                className="w-8 h-8 items-start sm:w-10 sm:h-10 rounded-full border border-gray-300"
              />

              {/* نص التعليق */}

              <p className="text-gray-700 text-sm sm:text-base break-words whitespace-normal overflow-hidden">
                {comment.CommeText}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 items-end text-center mt-2 text-sm sm:text-base">
            No comments yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
