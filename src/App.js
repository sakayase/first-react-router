import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Author from './pages/Author';

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="nav-link" exact to="/">Accueil</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/author/:id" component={Author} />
          <Route path="/blog/:id" component={Post} />
          <Route path="/blog" component={Blog} /> 
          <Route path="/" component={Home} />  {/* si pas exact(argument de Route enlevé ici car Switch prend le premier lien trouvé), 
                                                path="/" prend tout les path car / est contenu dans tout les autre path */}
        </Switch>
      </Router>

    )
  }
}
