import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCandidates, deleteCandidate} from "../../actions/candidates";
import {Button, Form} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import ActionAlert from "../layout/ActionAlert";

export class Candidates extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        candidates: PropTypes.array.isRequired,
        getCandidates: PropTypes.func.isRequired,
        deleteCandidate: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCandidates();
    }

    checkOwner(owner, client) {
        return owner !== client;
    }

    render() {
        const buttonStyle = {width: "90px"};
        const client = this.props.client;
        return (
            <Fragment>
                <h1>Candidates List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Zip Code</th>
                        <th>Created At</th>
                        <th>Sponsor</th>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.candidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td>{candidate.id}</td>
                            <td>{candidate.candidateFirstName + " " + candidate.candidateLastName}</td>
                            <td>{candidate.email}</td>
                            <td>{candidate.phoneNo}</td>
                            <td>{candidate.address}</td>
                            <td>{candidate.city}</td>
                            <td>{candidate.region}</td>
                            <td>{candidate.country}</td>
                            <td>{candidate.zip}</td>
                            <td>{candidate.created_at}</td>
                            <td>{candidate.sponsoridname}</td>
                            <td>{candidate.candidatecategoryname}</td>
                            <td>
                                <Form.Check
                                    disabled
                                    checked={candidate.status}
                                    type="checkbox"
                                    id="default-checkbox"
                                />
                            </td>
                            <td>
                                <Link to={{
                                    pathname: `/edit-candidate/${candidate.id}`,
                                    state: {fromDashboard: false}
                                }}>
                                    <Button
                                        style={buttonStyle}
                                        variant="secondary"
                                        disabled={this.checkOwner(candidate.owner, client.id)}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <ActionAlert
                                    action={"Delete"}
                                    title={"Confirm Delete"}
                                    id={candidate.id}
                                    initaction={this.props.deleteCandidate}
                                    content={"Delete this Sponsor?"}
                                    style={buttonStyle}
                                    variant={"outlined"}
                                    color={"secondary"}
                                    disabled={this.checkOwner(candidate.owner, client.id)}
                                >
                                    Delete
                                </ActionAlert>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    sponsors: state.sponsors.sponsors,
    candidates: state.candidates.candidates,
    client: state.authentication.client
});

export default connect(mapStateToProps, {getCandidates, deleteCandidate})(
    Candidates
);
