import React from "react";
import { useParams } from "react-router-dom";
import CurrentUserData from "../FakeApis/CurrentUserData"; // ملف المستخدم الحالي
import Feeds from "../FakeApis/HomeFeedData"; // بيانات المنشورات

const Profile = () => {
  const { id } = useParams();

  // تحديد المستخدم بناءً على ID
  const isCurrentUser = id === "me";
  const user = isCurrentUser
    ? CurrentUserData[0]
    : Feeds.find(feed => feed.userid.toString() === id);

  if (!user) {
    return <h2 className="text-center text-red-500">User not found</h2>;
  }

  // اختيار البيانات المناسبة بناءً على حالة المستخدم
  const coverPhoto = isCurrentUser ? user.CoverPhoto : user.feedCoverImage;
  const profileImage = isCurrentUser ? user.ProfileImage : user.feedProfile;
  const userName = user.name;
  const userUsername = user.username;

  return (
    <div className="profile-container p-4 ml-32">
      {/* صورة الغلاف */}
      <div className="relative">
        <img
          src={coverPhoto}
          loading="lazy"
          alt="Cover"
          className="w-full h-56 object-cover rounded-lg"
        />
        <img
          src={profileImage}
          loading="lazy"
          alt={userName}
          className="w-24 h-24 rounded-full absolute bottom-0 left-4 transform translate-y-1/2 border-4 border-white"
        />
      </div>

      {/* معلومات المستخدم */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">{userName}</h1>
        <p className="text-gray-500">{userUsername}</p>
      </div>


    </div>
  );
};

export default Profile;
