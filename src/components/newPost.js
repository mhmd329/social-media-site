import React, { useState, useContext } from "react";
import { FaImage, FaPaperPlane } from "react-icons/fa";
import { SocialContext } from "../context/SocialContext"; // ✅ تأكد من استخدام SocialContext من SocialProvider
import CurrentUser from "../FakeApis/CurrentUserData";

const NewPost = () => {
  const {setPosts} = useContext(SocialContext);

  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  const handlePost = () => {
    if (postText.trim() || image) {
      setPosts((prevPosts) => [
        {
          id: Date.now(), 
          desc: postText,
          feedImage: image,
          feedProfile: CurrentUser[0].ProfileImage,
          name:CurrentUser[0].name,
          date: "just now",
          comments:[],
          like: [], // لا يوجد إعجابات عند إنشاء المنشور
        },
        ...prevPosts,
      ]);
      setPostText("");
      setImage(null);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 w-full max-w-[700px] mx-auto">
    {/* حقل إدخال النص */}
    <textarea
      className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      placeholder="What's on your mind?"
      rows="4"
      value={postText}
      onChange={(e) => setPostText(e.target.value)}
    />
  
    {/* عرض الصورة المرفوعة */}
    {image && (
      <div className="mt-3 relative flex justify-center">
        <img src={image} alt="Preview" className="w-60 rounded-md shadow-md" />
        <button
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full text-xs hover:bg-red-600 transition"
          onClick={() => setImage(null)}
        >
          ✖
        </button>
      </div>
    )}
  
    {/* الأزرار */}
    <div className="flex justify-between items-center mt-4">
      {/* زر رفع الصورة */}
      <label className="flex items-center gap-2 cursor-pointer text-blue-500 font-medium hover:text-blue-600 transition">
        <FaImage className="text-lg" />
        <span className=" sm:inline">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
  
      {/* زر نشر المنشور */}
      <button
        className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-md text-white transition ${
          postText.trim() || image
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={handlePost}
        disabled={!postText.trim() && !image}
      >
        <FaPaperPlane />
        <span className=" sm:inline">Post</span>
      </button>
    </div>
  </div>
  
  );
};

export default NewPost;
