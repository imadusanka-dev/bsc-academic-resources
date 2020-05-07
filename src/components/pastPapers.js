import React, {Component} from 'react';
import { Link} from "react-router-dom";

class PastPapers extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">

                <Link to='/'>
                    <i className="fas fa-arrow-circle-left"></i>
                    Back
                </Link>
            <p>Past Papers</p>
            </div>
        );
    }
}

export default PastPapers;