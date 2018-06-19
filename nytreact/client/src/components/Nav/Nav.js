import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>

    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded" >
        <Link className="navbar-brand" to="/">NYT Article Search</Link>
        <ul className="navbar-nav"> 
                <li className="nav-item" style={{ float: 'right'}}>
                    <Link to="/"><button type="button" className="btn btn-info navbutton"><i className="fas fa-home"/> Home</button></Link>
            </li>
            <li className="nav-item">
                    <Link to="/savedArticles"><button type="button" className="btn btn-info navbutton"><i className="far fa-save"></i> Saved Articles</button></Link>
            </li>
        </ul>
    </nav>
  </div>

export default Nav;