
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Global Header */}
      <Header />

      {/* Page Content Container */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
