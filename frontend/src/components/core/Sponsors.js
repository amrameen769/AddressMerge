import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSponsors, deleteSponsor} from "../../actions/core";
import {Button, Form} from "react-bootstrap";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import ActionAlert from "../layout/ActionAlert";

export class Sponsors extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        sponsors: PropTypes.array.isRequired,
        deleteSponsor: PropTypes.func.isRequired,
        getSponsors: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getSponsors();
    }

    checkOwner(owner, client) {
        return owner !== client;
    }

    render() {
        const buttonStyle = {width: "90px"};
        const client = this.props.client;
        return (
            <Fragment>
                <h1>Sponsors List</h1>
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
                        <th>Group Name</th>
                        <th>Status</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.sponsors.map(sponsor => (
                        <tr key={sponsor.id}>
                            <td>{sponsor.id}</td>
                            <td>{sponsor.firstName + " " + sponsor.lastName}</td>
                            <td>{sponsor.email}</td>
                            <td>{sponsor.phoneNo}</td>
                            <td>{sponsor.address}</td>
                            <td>{sponsor.city}</td>
                            <td>{sponsor.region}</td>
                            <td>{sponsor.country}</td>
                            <td>{sponsor.zip}</td>
                            <td>{sponsor.created_at}</td>
                            <td>{sponsor.sponsorgroupname}</td>
                            <td>
                                <Form.Check
                                    disabled
                                    checked={sponsor.status}
                                    type="checkbox"
                                    id="default-checkbox"
                                />
                            </td>
                            <td>
                                <Link to={{
                                    pathname: `/edit-sponsor/${sponsor.id}`,
                                    state: {fromDashboard: false}
                                }}>
                                    <Button
                                        style={buttonStyle}
                                        variant="secondary"
                                        disabled={this.checkOwner(sponsor.owner, client.id)}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <ActionAlert
                                    action={"Delete"}
                                    title={"Confirm Delete"}
                                    id={sponsor.id}
                                    content={"Delete this Sponsor?"}
                                    initaction={this.props.deleteSponsor}
                                    style={buttonStyle}
                                    variant={"outlined"}
                                    color={"secondary"}
                                    disabled={this.checkOwner(sponsor.owner, client.id)}
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
    client: state.authentication.client
});

export default connect(mapStateToProps, {getSponsors, deleteSponsor})(
    Sponsors
);
