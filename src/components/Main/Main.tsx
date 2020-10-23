import React from "react";

// display: flex;
// justify-content: space-between;
// margin: 20px;
// padding: 20px;
// height: 150px; /* Force our height since we don't have actual content yet */
// background-color: #e3e4e6;
// color: slategray;

export const Main: React.FC = ({ children }) => {
  return <main className="main">{children}</main>;
};
