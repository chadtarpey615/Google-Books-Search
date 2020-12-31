import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/Navabr/index"
import Form from "../src/components/Form/index"
import Header from "../src/components/header/Header"
import BooksContainer from "../src/components/container/BooksContainer"
function App() {
  return (
    <Router>
    <div>
      <Navbar />
    <Route exact path="/" component={BooksContainer} />

    </div>
    </Router>
  );
}

export default App;
