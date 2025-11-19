import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Auth from "./screens/AuthPage";
import Dashboard from "./screens/Dashboard";
import MyAgents from "./screens/MyAgentsPage";
import ProfilePage from "./screens/ProfilePage";
import AnalyzeWebsite from "./screens/AnalyzeWebsite"; 
import ConfigureAgent from "./screens/ConfigureAgentPage";
import Layout from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Route>

        {/* Dashboard pages */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-agents" element={<MyAgents />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/analyze-website" element={<AnalyzeWebsite />} />
          <Route path="/configure-agent" element={<ConfigureAgent />} />
        </Route>
      </Routes>
    </Router>
  );
}
