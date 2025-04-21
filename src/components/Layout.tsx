
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full px-4 md:px-6 pb-16 md:pb-6">
        {/* Main Content Area with constrained width */}
        <div className="max-w-screen-2xl mx-auto w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
