import { FaPlus, FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Stories from "../FakeApis/StoriesData";
import CurrentUser from "../FakeApis/CurrentUserData";

const Storyies = () => {
  const [storyies, setStoryies] = useState(Stories);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleNextStory = () => {
    const currentIndex = storyies.findIndex((s) => s.id === selectedStory.id);
    if (currentIndex < storyies.length - 1) {
      setSelectedStory(storyies[currentIndex + 1]);
    }else{
      setIsModalOpen(false)
    }
  };

  const handlePrevStory = () => {
    const currentIndex = storyies.findIndex((s) => s.id === selectedStory.id);
    if (currentIndex > 0) {
      setSelectedStory(storyies[currentIndex - 1]); // ✅ إصلاح المشكلة هنا
    }
  };

  const handleAddStory = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newStory = {
        id: "me",
        story: imageUrl,
        storyProfile: CurrentUser[0].ProfileImage,
        name: CurrentUser[0].name,
      };
      setStoryies([newStory, ...storyies]);
     
    }
  };

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-3 p-3 bg-blue-300 rounded-lg max-w-[700px] mx-auto overflow-x-auto scrollbar-hide">
        {/* زر "إضافة ستوري" */}
        <div className="relative w-24 h-40 flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg shrink-0 hover:shadow-xl transition">
          {/* صورة البروفايل */}
          <img
            alt="profile"
            src={CurrentUser[0].ProfileImage}
            className="w-10 h-10 rounded-full border-2 border-blue-300 absolute top-2 left-2"
          />

          {/* 🔹 زر الإضافة */}
         
      <button className="absolute bottom-3 flex flex-col items-center justify-center bg-blue-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer">
        <FaPlus className="text-xl" />
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 "
          onChange={handleAddStory}
        />
      </button>
        </div>

        {/* باقي القصص */}
        {storyies.map((story) => (
          <div
            onClick={() => handleOpenStory(story)} // ✅ إصلاح المشكلة هنا
            key={story.id}
            className="relative w-24 h-40 flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg shrink-0 hover:shadow-xl transition cursor-pointer"
          >
            {/* صورة الستوري */}
            <img
              alt="story"
              src={story.story}
              className="w-full h-28 object-cover"
            />

            {/* صورة البروفايل */}
            <img
              alt="profile"
              src={story.storyProfile}
              className="w-10 h-10 rounded-full border-2 border-blue-300 absolute top-2 left-2"
            />

            {/* اسم المستخدم */}
            <p className="text-xs text-gray-800 mt-auto p-2 font-semibold truncate">
              {story.name}
            </p>
          </div>
        ))}
      </div>

      {/* المودال لعرض الستوري */}
      {isModalOpen &&  (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsModalOpen(false)}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={handlePrevStory}
          >
            <FaArrowLeft />
          </button>
          <div className="max-w-lg w-full">
            <img alt="profile" src={selectedStory.storyProfile}   className="w-10 h-10 rounded-full border-2 border-blue-300 absolute top-12 left-42"/>
            <img
              alt="story"
              src={selectedStory.story}
              className="w-full h-[500px] object-contain rounded-lg"
            />
          </div>
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={handleNextStory}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Storyies;
