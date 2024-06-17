import React from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
