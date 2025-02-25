import React, { createContext, useState } from "react";
import Feeds from "../FakeApis/HomeFeedData";

export const SocialContext = createContext();
const SocialProvider = ({ children }) => {
  //logic for posts
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

  return (
    <SocialContext.Provider
      value={{
        posts,

        handleLike,
        setPosts,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};

export default SocialProvider;
