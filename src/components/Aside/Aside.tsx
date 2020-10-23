import React from "react";

export const Aside: React.FC = ({ children }) => {
  return <aside className="sidenav flex flex-col">{children}</aside>;
};
