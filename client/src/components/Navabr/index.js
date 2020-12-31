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
      >
        Search Books
      </Link>
      <Link 
      to="/saved"
      >
        Saved Books
      </Link>

    </nav>
    )
}