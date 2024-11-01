import React from 'react';
import { Sidebar } from '../components/Sidebar';


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex border-collapse">
      <Sidebar />
      <main className="flex-1 pt-[2rem] pb-1 mx-auto max-w-full">
        {children}
      </main>
    </div>
  );
};
