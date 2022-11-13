import React, { useState, createContext } from "react";
import TopNav from "./topnav";
import Bottomnav from "./bottomnav";
export const OpenNavBar = createContext(false);
function NavBar() {
  const [openNav, setOpenNav] = useState(false)
  return (
    <nav>
      <OpenNavBar.Provider value={{ openNav, setOpenNav }}>
        <TopNav />
        <Bottomnav />
      </OpenNavBar.Provider>
    </nav>
  );
}

export default NavBar;
