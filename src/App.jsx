import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Configuration from "./pages/Configuration";
import Profile from "./pages/Profile";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
             <Route path="/configuration" element={<Configuration />} />
             <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Dashboard />} /> {/* Default */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
