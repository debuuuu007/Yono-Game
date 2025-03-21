import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-pink-600">
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};