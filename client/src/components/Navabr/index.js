import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <Link 
      to="/"
      style={{ color: "white"}}
      className="px-2"
      >
        Search Books
      </Link>
      <Link 
      to="/saved"
      style={{ color: "white"}}

      >
        Saved Books
      </Link>

    </nav>
    )
}