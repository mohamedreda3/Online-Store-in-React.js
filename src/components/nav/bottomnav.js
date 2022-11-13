import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { OpenNavBar } from "./nav";
import { routes, logo } from "../../data/arrs/routes";
import Logo from "./logo";
import Links from "./links";
function Bottomnav(props) {
  const [Routes, setRoutes] = useState([...routes.submain]);
  const nav = useContext(OpenNavBar);
  return (
    <div className={!nav.openNav ? "cl-1 cl-t bottomnav" : "cl-1 cl-t bottomnav active"}>
      <Logo logo={logo} />
      <Links />
      {
        Routes.map((item, index) => {
          return (
            <Link key={index} className="cl-l1" to={'/'+item.link.substring(1, item.link.length).toUpperCase()}>
              <img src={item.icon} alt={item.link.substring(1, item.link.length).toUpperCase()} />
              <span>{item.link.substring(1, item.link.length).toUpperCase()}</span>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Bottomnav;
