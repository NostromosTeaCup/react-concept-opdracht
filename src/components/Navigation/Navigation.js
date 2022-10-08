import React from "react";
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
    <>
<div className="nav-inner_container">
    <nav>
        <ul>
            <li>Hottest Posts</li>
            <li>Reddit</li>
            <li>Memes</li>
        </ul>
    </nav>
</div>
    </>
    )
}

export default Navigation;