
import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout Component
 * 
 * Main layout wrapper for the application. Provides consistent page structure with:
 * - Header with navigation
 * - Main content area with appropriate padding and max width
 * - Footer
 * 
 * Used as a wrapper for all page components.
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full px-0">
        <div className="max-w-screen-2xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
