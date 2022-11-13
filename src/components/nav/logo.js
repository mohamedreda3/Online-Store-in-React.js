import React, { useEffect, useState, useContext } from "react";
import { OpenNavBar } from "./nav";
import LogoC from "./logoC";
function Logo(props) {
    const nav = useContext(OpenNavBar);
    return (
        <div className="logo cl-t">
            <LogoC name={props.logo.name} />
            <div className={!nav.openNav ? "menu cl-t" : "menu cl-t active"} onClick={() => nav.setOpenNav(!nav.openNav)}>
                <span className="cl-t"></span>
                <span className="cl-t"></span>
            </div>
        </div>
    )
}

export default Logo