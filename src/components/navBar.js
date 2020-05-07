import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-light" style={{'backgroundColor': '#e3f2fd'}}>
                <Link to="/"><h6 className="navbar-brand">BSc Academic Resources</h6></Link>
            </nav>
        </div>
    );

}

export default Navbar;