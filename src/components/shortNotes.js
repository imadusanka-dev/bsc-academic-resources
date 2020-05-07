import React, {Component} from 'react';
import { Link} from "react-router-dom";
import Tabletop from 'tabletop';

class ShortNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        Tabletop.init({
            key: '1HkDdq4OWwQblWEv9wJCEFve2XMulVyiEOqIX0ZTh43k',
            callback: sheetData => {
                this.setState({data: sheetData},()=>{
                    console.log(this.state.data)
                });
            },
            simpleSheet: true,
        });
    }

    render() {
        var shortnotes;
        if (this.state.data !== null){
            shortnotes = this.state.data.map((shortnote)=>{
                return(
                    <li className="list-group-item"><a href={shortnote.link}>{shortnote.name}</a></li>
                );
            });
        }

        return (
            <div className="container app">
                <Link to='/'>
                    <i className="fas fa-arrow-circle-left"></i>
                    Back
                </Link>
                <br/>
                <div className="card">
                    <div className="card-header">
                        Short Notes
                    </div>
                    <ul className="list-group list-group-flush">
                        {shortnotes}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShortNotes;