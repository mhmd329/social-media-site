import React, { useState, useEffect, useContext } from "react";
import { FaComment } from "react-icons/fa";
import CurrentUser from "../FakeApis/CurrentUserData";
import { SocialContext } from "../context/SocialContext";

const Comment = ({ post }) => {
  const { setPosts } = useContext(SocialContext);
  const [newComment, setNewComment] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, [post.comments]); // ✅ يتم تحديث التأثير عند تحديث التعليقات

  const addComment = () => {
    if (!newComment.trim()) return;

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id
          ? {
              ...p,
              comments: [
                ...p.comments, // ✅ تحديث التعليقات داخل `posts`
                {
                  id: Date.now(),
                  CommeText: newComment,
                 commentProfile: CurrentUser[0].ProfileImage,
                 name:CurrentUser[0].name,
                },
              ],
            }
          : p
      )
    );

    setNewComment(""); // ✅ إعادة تعيين حقل الإدخال بعد الإضافة
  };

  return (
    <div className="mt-4 border-t pt-4 bg-gray-50 p-5 rounded-lg shadow-md transition-all duration-300 max-w-2xl mx-auto">
    {/* إدخال تعليق جديد */}
    <div className="flex flex-wrap items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        type="text"
        placeholder="Write a comment..."
        className="flex-1 min-w-0 px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
      />
      <button
        onClick={addComment}
        className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition w-full sm:w-auto"
      >
        <div className="flex items-center justify-center gap-2">
          <FaComment className="text-lg" />
          <span>Add Comment</span>
        </div>
      </button>
    </div>
  
    {/* عرض التعليقات الخاصة بالبوست */}
    <div className="mt-4 space-y-3">
      {post.comments.length > 0 ? (
        post.comments.map((comment, index) => (
          <div
            key={comment.id}
            className={`flex sm:flex-row flex-col sm:items-start items-center space-x-0 sm:space-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-500 ease-out transform ${
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
  
            {/* تفاصيل التعليق */}
            <div className="flex flex-col w-full items-center">
              <p className="text-gray-900 font-semibold text-sm sm:text-base">{comment.name}</p>
              <p className="text-gray-700 text-sm sm:text-base break-words w-full max-w-[400px] mt-1 px-2 py-1 bg-gray-100 rounded-md">
                {comment.CommeText}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center mt-2 text-sm sm:text-base">
          No comments yet.
        </p>
      )}
    </div>
  </div>
  
  );
};

export default Comment;
