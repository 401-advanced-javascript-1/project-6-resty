import React from 'react';
import {connect} from 'react-redux';



class History extends React.Component {

    constructor(props){
        super(props);
        this.state = {history: {}}
    }

    resetFormFromHistory = event => {
        event.preventDefault();
        let newState = this.props.state.history[event.currentTarget.id];
        this.setState({ ...newState });
    };

    render(){
        return(
            <aside>
            <h2>History</h2>
            <ul id="history">
            {this.state.history &&
                Object.keys(this.props.state.history).map(key => (
                <li key={key} id={key} onClick={this.resetFormFromHistory}>
                    <span>
                    <strong>{this.props.state.history[key].method}</strong>
                    </span>
                    <span>{this.props.state.history[key].host}</span>
                    <span>{this.props.state.history[key].path}</span>
                </li>
                ))}
            </ul>
            </aside>
        )
    }
}

export default History;