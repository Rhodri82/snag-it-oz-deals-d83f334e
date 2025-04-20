import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12">
      {children}
    </div>
  );
};

export default Layout;
