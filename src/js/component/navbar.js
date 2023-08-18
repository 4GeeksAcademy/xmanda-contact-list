import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark mb-3 sticky-top">
      <Link to="/">
        <div className="mx-4">
			<h2 className="title">Contacts</h2>
		</div>
      </Link>
      <div className="ml-auto">
        <Link to="/new">
          <button className="addcontact btn btn-light mx-4">Add Contact</button>
        </Link>
      </div>
    </nav>
  );
};