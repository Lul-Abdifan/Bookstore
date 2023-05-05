import React from "react";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="navbar">
      <h1>Bookstore</h1>
      <nav className="nav-lists">
        <div className="links">
          <div>
            <Link to="/books">BOOKS</Link>
          </div>

          <div>
            <Link to="/categories">CATEGORIES</Link>
          </div>
        </div>
        <div>
          <IoMdContact className="signup"/>
        </div>
      </nav>
    </div>
  );
}

export default Layout;
