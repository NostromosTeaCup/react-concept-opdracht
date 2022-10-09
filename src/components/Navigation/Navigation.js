import React from "react";
import './Navigation.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navigation() {
    return (
    <>
<div className="nav-inner_container">
    <Router>
    <nav>
        <ul>
            <li><Link to="/">Hottest Posts</Link></li>
            <li><a href="https://www.reddit.com" target="_blank">Reddit</a></li>
            <li><a href="https://www.reddit.com/r/memes/" target="_blank">Memes</a></li>
        </ul>
    </nav>
    </Router>
</div>
    </>
    )
}

export default Navigation;