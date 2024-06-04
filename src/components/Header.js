import React, { useEffect } from "react";
import '../styles/Header.css';

const Header = ({pageName}) =>{
    return(
        <header className="header">
        <div className="header-content">
          <h1 className="page-name">{pageName}</h1>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
      </header>
    );
}

export default Header;
