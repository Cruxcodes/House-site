import React from "react";
import Navbar from "./Navbar";
const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
