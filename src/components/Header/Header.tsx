import React from "react";

export const Header: React.FC = ({ children }) => {
  return (
    <header className="header flex justify-between items-center px-0 py-4">
      {children}
    </header>
  );
};
