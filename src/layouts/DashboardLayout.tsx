import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardFooter from '../components/DashboardFooter';

interface DashboardLayoutProps {
  children?: ReactNode; // Optional if you want to pass children manually
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />

      {/* Main Content */}
      <main className="flex-1">
        {children}
        <Outlet /> {/* Renders nested routes */}
      </main>

      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
