import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    styles = { "font-family": 'Roboto'};
    render() {
        return (
            <h1 style={this.styles} >Address Merge</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));