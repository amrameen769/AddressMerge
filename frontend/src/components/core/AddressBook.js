import React, {Component} from "react";
import TabsBar from "../layout/TabsBar";
import {connect} from "react-redux";
import {Jumbotron} from "react-bootstrap";

export class AddressBook extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    Welcome {this.props.client.username}
                </Jumbotron>
                <TabsBar/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    client: state.authentication.client
});

export default connect(mapStateToProps, {})(AddressBook);
