import React, {Component} from 'react';
import { Link} from "react-router-dom";

class PastPapers extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container app">
                <Link to='/'>
                    <i className="fas fa-arrow-circle-left"></i>
                    Back
                </Link>
                <br/>
                <div className="card">
                    <div className="card-header">
                        Past Papers
                    </div>
                    <ul className="list-group list-group-flush">
                        <p>Updating..</p>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PastPapers;