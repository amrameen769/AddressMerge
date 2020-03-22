import React, { Component } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActionAlert from "../../layout/ActionAlert";
import { connect } from "react-redux";
import { deleteFund, getFunds } from "../../../actions/donations";

class Funds extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFunds();
    }

    checkOwner(owner, client) {
        return owner !== client;
    }

    render() {
        const buttonStyle = { width: "90px" };
        const client = this.props.client;
        return (
            <div>
                <h1>Donation Details</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date & Time</th>
                            <th>Amount</th>
                            <th>Sponsor</th>
                            <th>Candidate</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.funds.map(fund => (
                            <tr key={fund.id}>
                                <td>{fund.id}</td>
                                <td>{fund.donationName}</td>
                                <td>{fund.donationDescription}</td>
                                <td>{fund.donationDate}</td>
                                <td>{fund.donationAmount}</td>
                                <td>{fund.sponsor_name}</td>
                                <td>{fund.candidate_name}</td>
                                <td>
                                    <Link
                                        to={{
                                            pathname: `/edit-fund/${fund.id}`,
                                            state: { fromDashboard: false }
                                        }}
                                    >
                                        <Button
                                            style={buttonStyle}
                                            variant="secondary"
                                            disabled={this.checkOwner(
                                                fund.owner,
                                                client.id
                                            )}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    <ActionAlert
                                        action={"Delete"}
                                        title={"Confirm Delete"}
                                        id={fund.id}
                                        content={"Delete this Fund?"}
                                        initaction={this.props.deleteFund}
                                        style={buttonStyle}
                                        variant={"outlined"}
                                        color={"secondary"}
                                        disabled={this.checkOwner(
                                            fund.owner,
                                            client.id
                                        )}
                                    >
                                        Delete
                                    </ActionAlert>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    funds: state.donations.donations,
    client: state.authentication.client
});

export default connect(mapStateToProps, { getFunds, deleteFund })(Funds);
