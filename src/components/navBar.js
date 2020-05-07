import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-light" style={{'background-color': '#e3f2fd'}}>
                <Link to="/"><a className="navbar-brand">BSc Academic Resources</a></Link>
            </nav>
        </div>
    );

}

export default Navbar;