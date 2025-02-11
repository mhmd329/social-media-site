import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import Feeds from "../FakeApis/HomeFeedData";
import Comment from "./Comment"; // استيراد مكون التعليقات

const Posts = () => {
  const [posts, setPosts] = useState(
    Feeds.map((feed) => ({ ...feed, liked: false, showComments: false }))
  );

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              like: post.liked ? post.like - 1 : post.like + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const toggleComments = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, showComments: !post.showComments } : post
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-6">
      {posts.map((Feed) => (
        <div
          key={Feed.id}
          className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
        >
          {/* Header */}
          <div className="flex items-center space-x-4 mb-3">
            <img
              alt="profile"
              src={Feed.feedProfile}
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <h2 className="text-lg font-semibold text-gray-800">{Feed.name}</h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-3">{Feed.desc}</p>

          {/* Post Image */}
          {Feed.feedImage && (
            <img
              alt="post"
              src={Feed.feedImage}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}

          {/* Buttons (Like, Comment, Share) */}
          <div className="flex justify-around mt-3 text-gray-600">
            <button
              onClick={() => handleLike(Feed.id)}
              className={`flex items-center space-x-2 transition ${
                Feed.liked ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              <FaThumbsUp className="text-xl" />
              <span>Like {Feed.like}</span>
            </button>

            <button
              onClick={() => toggleComments(Feed.id)}
              className="flex items-center space-x-2 hover:text-green-500 transition"
            >
              <FaComment className="text-xl" />
              <span>Comment {Feed.comment}</span>
            </button>

            <button className="flex items-center space-x-2 hover:text-purple-500 transition">
              <FaShare className="text-xl" />
              <span>Share</span>
            </button>
          </div>

          {/* Comments Section */}
          {Feed.showComments && <Comment postId={Feed.id} />}
        </div>
      ))}
    </div>
  );
};

export default Posts;
