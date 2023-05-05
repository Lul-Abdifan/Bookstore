import React from "react";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="navbar">
      <h1>Bookstore</h1>
      <nav className="nav-lists">
        <div>
          <ul>
            <li>
              <Link to="/books" />
              BOOKS
            </li>

            <li>
              <Link to="/categories" />
              CATEGORIES
            </li>
          </ul>
        </div>
        <div>
          <IoMdContact />
        </div>
      </nav>
    </div>
  );
}

export default Layout;
