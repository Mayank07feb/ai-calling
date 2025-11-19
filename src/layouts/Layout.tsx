import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Footer from "../components/Footer"; // Footer is hidden

interface LayoutProps {
  children?: ReactNode; // Optional if you want to pass children manually
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 mx-auto w-full py-10">
        {children}
        <Outlet /> {/* Renders nested routes */}
      </main>

      {/* Footer hidden */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
