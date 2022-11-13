import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { routes, logo } from "../../data/arrs/routes";
import { categories } from "../../apis/axios/api";
import Logo from "./logo";
import { useSelector } from "react-redux";
function TopNav(props) {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    categories().then(data => {
      category.push(...data.data);
      setCategory([...category])
    })
  }, [])
  const cart = useSelector(state => state);
  return (
    <div className="cl-1 topnav">
      <Logo logo={logo} />
      <div className="listtoggle cl-t">
        <form action={routes.main.search.link} className="search cl-t">
          <select className="cl-4 cl-t" name="category" id="cate">
            <option value="all">All</option>
            {
              category.map((item, index) => {
                return <option key={index} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
              })
            }
          </select>
          <input type="search" name="search" autoFocus />
          <button className="cl-t cl-2">
            <img src={routes.main.search.icon} alt="" />
          </button>
        </form>
        <div className="links">
          <Link className="cl-2 cl-L cl-t" to={routes.main.login.link}>
            Log in
          </Link>
          <Link className="cl-2 cl-t cl-fc1" to={routes.main.favourite.link}>
            <span className="cl-cln"></span>
            <img src={routes.main.favourite.icon} alt="" />
          </Link>
          <Link className="cl-2 cl-t  cl-fc1" to={routes.main.cart.link}>
            <span className="cl-cln">{cart.cart.cart.length}</span>
            <img src={routes.main.cart.icon} alt="" />
          </Link>
        </div>
      </div>
    </div >
  );
}

export default TopNav;
