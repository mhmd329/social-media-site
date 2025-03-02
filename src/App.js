import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage"; // صفحة الملف الشخصي
import NavBar from "./components/NavBar"; // القائمة العلوية
import LeftBar from "./components/LeftBar"; // الشريط الجانبي

const App = () => {
  return (
    <Router>
      <div className="bg-blue-200 text-white min-h-screen">
        {/* المكونات الثابتة */}
        <NavBar />
        <LeftBar />

        {/* منطقة التغيير بناءً على المسار */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </div>

       
      </div>
    </Router>
  );
};

export default App;
