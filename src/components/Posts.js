import React, { useContext } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ استيراد useNavigate
import Comment from "./Comment";
import { SocialContext } from "../context/SocialContext";

const Posts = () => {
  const { posts, handleLike, setPosts } = useContext(SocialContext);
  const navigate = useNavigate(); // ✅ تعريف المتصفح

  const toggleComments = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, showComments: !post.showComments } : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-6 px-2 sm:px-4 bg-blue-100 py-4 rounded-lg">
      {posts.map((Feed) => (
        <div
          key={Feed.id}
          className="bg-blue-50 border border-gray-300 rounded-lg shadow-lg p-5 hover:shadow-xl transition duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {/* ✅ عند الضغط على الصورة، يتم توجيه المستخدم إلى صفحة البروفايل */}
              <img
                alt="profile"
                src={Feed.feedProfile}
                className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer"
                onClick={() => navigate(`/profile/${Feed.userid}`)} // ✅ التنقل عند الضغط
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{Feed.name}</h2>
                <p className="text-sm text-gray-500">{Feed.date}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-3 break-words">{Feed.desc}</p>

          {/* Post Image */}
          {Feed.feedImage && (
            <img
              alt="post"
              src={Feed.feedImage}
              className="w-full h-auto object-cover max-h-[500px] rounded-lg shadow-sm"
            />
          )}

          {/* Buttons (Like, Comment) */}
          <div className="flex justify-between mt-3 text-gray-600">
            <button
              onClick={() => handleLike(Feed.id)}
              className={`flex items-center space-x-2 transition-all duration-200 px-4 py-2 rounded-lg ${
                Feed.liked ? "text-blue-600 bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <FaThumbsUp className="text-xl" />
              <span className="text-sm sm:text-base">Like {Feed.like}</span>
            </button>

            <button
              onClick={() => toggleComments(Feed.id)}
              className="flex items-center space-x-2 hover:text-green-600 transition px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              <FaComment className="text-xl" />
              <span className="text-sm sm:text-base">Comment {Feed.comments.length}</span>
            </button>
          </div>

          {/* Comments Section */}
          {Feed.showComments && (
            <div className="mt-4 transition-all duration-300 opacity-100 scale-100">
              <Comment post={Feed} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
