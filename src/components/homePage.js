import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function HomePage() {
    return(
            <div className="container app">
                <br/>
                <div className="card border-info mb-3">
                    <div className="card-body">
                        <i className="fas fa-paper-plane"></i>
                        <p><Link to={'/pastpapers'}>Past Papers</Link></p>
                    </div>
                </div>
                <br/>
                <div className="card border-info mb-3">
                    <div className="card-body">
                        <i className="fas fa-sticky-note"></i>
                        <p><Link to={'/shortnotes'}>Short Notes</Link></p>
                    </div>
                </div>
            </div>
    );

}

export default HomePage;