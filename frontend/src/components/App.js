import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';

class App extends Component {
    styles = { "font-family": 'Roboto'};
    render() {
        return (
            <Header />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));