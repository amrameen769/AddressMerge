import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import Merger from "./core/Merger";

class App extends Component {
    styles = {
        "font-family": "Roboto"
    };

    render() {
        return (
            <Merger />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
