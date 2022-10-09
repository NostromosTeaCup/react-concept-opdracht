import React from "react";
import './Header.css';

function Header({children}) {
    return (
        <div className="inner-container">
            {children}
        </div>
    );
}

export default Header;