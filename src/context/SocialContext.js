import React, { createContext, useEffect, useState } from "react";
import Feeds from "../FakeApis/HomeFeedData";

export const SocialContext = createContext();
const SocialProvider = ({ children }) => {
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
    <SocialContext.Provider
      value={{
       posts,
       toggleComments,
       handleLike 
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};

export default SocialProvider;