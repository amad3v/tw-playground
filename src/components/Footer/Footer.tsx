import React from "react";

export const Footer: React.FC = ({ children }) => {
  return (
    <footer className="bg-gray-500 footer flex justify-between items-center px-0 py-4">
      {children}
    </footer>
  );
};
